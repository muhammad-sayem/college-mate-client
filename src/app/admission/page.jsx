"use client"
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AdmissionPageCard from "../components/AdmissionPageCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import AuthContext from "../Context/AuthContext";

const Admission = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const axiosSecure = useAxiosSecure();

  const { data: colleges, isLoading } = useQuery({
    queryKey: ['colleges'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/colleges');
      return data;
    },
    enabled: !!user && !loading
  });

  if (loading || isLoading || !user) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <h2 className='text-center text-4xl text-sky-700 font-bold py-10'> Available Colleges for Admission </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          colleges.map(college =>
            <AdmissionPageCard
              key={college._id}
              college={college}
            />
          )
        }
      </div>
    </div>
  );
};

export default Admission;
