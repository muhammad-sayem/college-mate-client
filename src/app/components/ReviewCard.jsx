const ReviewCard = ({singleReview}) => {
  const {review, rating, college, reviewer} = singleReview;
  console.log("College ----------> ", college);

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div>
        <div>
          <img className="w-16 h-16 rounded-full" src={reviewer?.photoURL} alt="" />
          <p className="text-sky-700 text-xl font-bold mt-2 mb-4"> {reviewer?.displayName} </p>
          <p className="font-bold"> Review About: {college.collegeName} </p>
          <p> {review} </p>
          <p className="font-bold text-lg"> Rating: {rating} </p>
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;