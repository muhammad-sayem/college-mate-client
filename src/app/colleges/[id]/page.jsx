"use client";

import useAxiosSecure from "@/app/hooks/useAxiosSecure";
import LoadingSpinner from "@/app/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import PrivateRoute from "@/app/components/PrivateRoute";

const CollegeDetailsPage = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: college, isLoading } = useQuery({
    queryKey: ['college', id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/colleges/${id}`);
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!college) {
    return <p className="text-center text-sky-700 text-3xl mt-20">No college found</p>;
  }

  const { collegeName, collegeImage, collegeDetails, researchWorks, eventsDetails, sports, admissionProcess } = college;

  return (
    <PrivateRoute>
      <div className="flex min-h-screen flex-col justify-center">
        <div className="flex justify-center items-center bg-white shadow-xl px-10 py-4 rounded-lg">
          <div className="w-1/2">
            <img className="w-full rounded-lg" src={collegeImage} alt={collegeName} />
          </div>

          <div className="w-1/2 p-6">
            <h2 className="text-3xl text-sky-700 font-bold mb-4">{collegeName}</h2>
            <p className="font-bold text-lg">College Details:</p>
            <p className="mb-4">{collegeDetails}</p>

            <p className="font-bold text-lg">Admission Process:</p>
            <p className="mb-4">{admissionProcess}</p>

            {eventsDetails && (
              <div className="mb-4">
                <h2 className="font-bold text-lg">Events Details:</h2>
                <ul>
                  {Object.entries(eventsDetails).map(([eventName, description]) => (
                    <li key={eventName}>
                      <span className="font-bold">{eventName}:</span> {description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4">
              <h2 className="font-bold text-lg">Research Works:</h2>
              <ul>
                {researchWorks.map((research, index) => (
                  <li key={index}>{research}</li>
                ))}
              </ul>
            </div>

            <h2 className="font-bold text-lg">Sports:</h2>
            <p>
              {sports.map((sport, index) => (
                <span key={index} className="inline text-sky-700 font-bold">
                  {sport}{" "}
                  {index !== sports.length - 1 && "| "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default CollegeDetailsPage;
