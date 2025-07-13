"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import MyCollegeDetails from "../components/MyCollegeDetails";
import LoadingSpinner from "../shared/LoadingSpinner";
import PrivateRoute from "../components/PrivateRoute";

const MyCollege = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  if (typeof user === "undefined") {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <PrivateRoute><LoadingSpinner /></PrivateRoute>;
  }

  const { data: myCollege, isLoading } = useQuery({
    queryKey: ['my-college', user.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/admission/${user.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!myCollege?.college) {
    return (
      <PrivateRoute>
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-7xl text-sky-700 font-bold"> No College Found </p>
        </div>
      </PrivateRoute>
    );
  }

  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col justify-center">
        <MyCollegeDetails key={myCollege._id} myCollege={myCollege} />
      </div>
    </PrivateRoute>
  );
};

export default MyCollege;
