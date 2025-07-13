import Link from "next/link";

const CollegesPageCard = ({ college }) => {
  const { _id, collegeName, collegeImage, admissionDate, events, researchHistory, sports, collegeRating, numOfResearch } = college;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="p-5 h-60 w-full rounded-3xl"
            src={collegeImage}
            alt="Shoes" />
        </figure>
        <div className="card-body py-0">
          <h2 className="card-title text-sky-700 font-bold">{collegeName}</h2>
          <p className="font-bold text-md"> Admission Deadline: {admissionDate} </p>

          <div className="flex items-center gap-x-1 font-bold">
            <h3 className="font-bold"> College Rating: </h3>
            <p> {collegeRating} </p>
          </div>

          <div className="flex items-center gap-x-1 font-bold">
            <h3 className="font-bold"> Number of Research: </h3>
            <p> {numOfResearch} </p>
          </div>

          <div className="card-actions justify-start pb-5">
            <Link href={`/colleges/${_id}`} className="btn bg-sky-700 text-white font-bold text-md hover:bg-transparent hover:text-sky-700 hover:border-sky-700">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesPageCard;