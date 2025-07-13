"use client";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const page = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-sky-100">
      <div className="p-6 rounded-xl shadow-lg text-center bg-white">
        <h2 className="text-3xl font-bold mb-2 text-sky-700">My Profile</h2>
        <img
          src={user?.photoURL}
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
          alt="User"
        />
        <p className="text-sky-700 text-xl font-bold">User Name: {user?.displayName}</p>
        <p className="text-sky-700 text-xl font-bold">User Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default page;
