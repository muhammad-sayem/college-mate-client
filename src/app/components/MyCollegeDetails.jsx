"use client";

import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyCollegeDetails = ({ myCollege }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  if (!myCollege || !myCollege.college) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="No Data"
          className="w-32 h-32 opacity-50"
        />
        <h2 className="text-2xl font-bold text-sky-700 mt-4">No College Found</h2>
        <p className="text-gray-600">You haven't selected any college yet.</p>
      </div>
    );
  }

  const { _id, college } = myCollege;

  const handleAddReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;

    const reviewData = {
      review,
      rating,
      college,
      reviewer: user,
    };

    try {
      await axiosSecure.post("/reviews", reviewData);
      form.reset();
      Swal.fire({
        title: "Submitted Successfully!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      const modal = document.getElementById(`modal-${_id}`);
      if (modal) modal.close();
    }
  };

  const handleCancelModal = () => {
    const modal = document.getElementById(`modal-${_id}`);
    if (modal) modal.close();
  };

  return (
    <div className="bg-white rounded-2xl py-16">
      <div className="flex flex-col items-center">
        <img className="h-96 rounded-xl" src={college.collegeImage} alt="" />
        <h2 className="text-center text-sky-700 text-3xl font-bold my-2">
          {college.collegeName}
        </h2>
        <p className="w-3/4 mx-auto text-center">{college.collegeDetails}</p>

        <button
          onClick={() => document.getElementById(`modal-${_id}`).showModal()}
          className="btn bg-sky-700 text-white font-bold text-md hover:bg-transparent hover:text-sky-700 hover:border-sky-700 mt-4"
        >
          Add Review
        </button>

        <dialog id={`modal-${_id}`} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-sky-700 text-center">Add Your Review</h3>

            <form onSubmit={handleAddReview}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-lg">Review</legend>
                <textarea
                  name="review"
                  className="textarea h-24 w-full"
                  placeholder="Write your review here"
                ></textarea>
              </fieldset>

              <select name="rating" defaultValue="Pick a rating" className="select w-full mt-2">
                <option disabled>Pick a rating</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <button
                type="submit"
                className="btn w-full bg-sky-700 text-white font-bold text-md hover:bg-transparent hover:text-sky-700 hover:border-sky-700 mt-4"
              >
                Submit
              </button>

              <button
                onClick={handleCancelModal}
                type="button"
                className="btn w-full bg-red-500 text-white font-bold text-md hover:bg-transparent hover:text-red-500 hover:border-red-500 mt-4"
              >
                Cancel
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyCollegeDetails;
