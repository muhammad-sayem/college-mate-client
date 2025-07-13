"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const Reviews = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await axios.get('https://college-mate-server.vercel.app/reviews');
      return data;
    }
  });

  console.log("Reviews ------------> ", reviews);

  if (isLoading) {
    return <LoadingSpinner /> 
  }

  return (
    <div className="pb-24">
      <h2 className="text-4xl text-center text-sky-700 font-bold mb-8"> Reviews </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          reviews.map(singleReview =>
            <ReviewCard
              key={singleReview._id}
              singleReview={singleReview}
            />
          )
        }
      </div>
    </div>
  );
};

export default Reviews;