import Link from "next/link";

const HomePageCard = ({ college }) => {
  const { _id, collegeName, collegeImage, admissionDate, events, researchHistory, sports } = college;

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

          <div>
            <h3 className="font-bold"> Research History: </h3>
            <p> {researchHistory} </p>
          </div>

          <div>
            <p className="mb-2 font-bold"> Events: </p>
            <div className="space-x-1">
              {
                events.map((event, index) => <p key={index} className="inline text-sky-700 font-bold"> {event} | </p>)
              }
            </div>
          </div>

          <div>
            <p className="mb-2 font-bold"> Sports: </p>
            <div className="space-x-1">
              {
                sports.map((sport, index) => <p key={index} className="inline text-sky-700 font-bold"> {sport} | </p>)
              }
            </div>
          </div>

          <div className="card-actions justify-start pb-5">
            <Link href={`/colleges/${_id}`} className="btn bg-sky-700 text-white font-bold text-md hover:bg-transparent hover:text-sky-700 hover:border-sky-700">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;