"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CollegesPageCard from "../components/CollegesPageCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const Colleges = () => {
  const { data: colleges, isLoading } = useQuery({
    queryKey: ['colleges'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5000/colleges');
      return data;
    }
  });
  console.log("All Colleges", colleges);

  if (isLoading) {
    return  <LoadingSpinner /> 
  }

  return (
    <div className="mb-24">
      <h2 className="text-4xl text-center text-sky-700 font-bold mb-8 pt-8">Colleges for Admission</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          colleges.map(college =>
            <CollegesPageCard
              key={college._id}
              college={college}
            ></CollegesPageCard>

          )
        }
      </div>
    </div>
  );
};

export default Colleges;