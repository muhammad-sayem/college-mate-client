"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
})

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    axiosInstance.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      console.log("Error caught in interceptor", `"${error.message}"`);
      if (error.status === 401 || error.status === 403) {
        console.log("Need to logout the user immediately");
        signOutUser()
          .then(() => {
            console.log("Logout Complete");
            router.push('/login')
          })
          .catch(err => {
            console.log(err);
          })
      }
      return Promise.reject(error);
    });
  }, [signOutUser])


  return axiosInstance;
};

export default useAxiosSecure;