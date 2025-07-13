import Link from "next/link";

const ResearchPapers = () => {
  return (
    <div className="pb-24">
      <h2 className="text-4xl text-center text-sky-700 font-bold mb-8"> Research Papers </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <Link
          href="https://dspace.mit.edu/handle/1721.1/152921"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
            Healthcare, Clinical Research and Digital Health Systems
          </h3>
          <p className="text-gray-600">Massachusetts Institute of Technology</p>
        </Link>

        {/* ---- */}
        <Link
          href="https://www.nature.com/articles/srep40863.epdf?author_access_token=QWrklDc_MUHgtSf90cXY3tRgN0jAjWel9jnR3ZoTv0Mc7dBF61OoNO9r8E-J62_DArWGWEgjvx3gEPwwcelUhlRzZLnE8MMfQ57uFeLFY-PG26-TKRmhoI-eT_-phOHz"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
             Reliable and efficient solution of genome-scale models of Metabolism and macromolecular Expression
          </h3>
          <p className="text-gray-600">Stanford University</p>
        </Link>

        {/* ------ */}
        <Link
          href="https://online.ucpress.edu/cse/collection/11724/Special-Collection-Climate-Resilient-Development"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
            Climate-Resilient Development (CRD) in the Hospitality and Tourism Sector: Perspectives and Prospects
          </h3>
          <p className="text-gray-600">University of California</p>
        </Link>
        {/* ---------- */}

        <Link
          href="https://repository.gatech.edu/entities/publication/5e628722-fd0f-4bfd-addc-0a11dc041ea0"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
            An Analysis of COVID-19, Air Quality, Race and Socioeconomic Status in Georgia
          </h3>
          <p className="text-gray-600">Georgia Institute of Technology</p>
        </Link>
        {/* ---------- */}

        <Link
          href="https://kilthub.cmu.edu/articles/thesis/Towards_Scalable_Automated_Program_Verification_for_System_Software/29304842?file=56143772"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
            Towards Scalable Automated Program Verification for System Software
          </h3>
          <p className="text-gray-600">Carnegie Mellon University</p>
        </Link>
        {/* ------------------------- */}
        <Link
          href="https://jte-journal.org/articles/10.21061/jte.v33i1.a.2"
          target="_blank"
          className="bg-white shadow-xl py-16 px-6 rounded-2xl text-center hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-sky-700 text-xl font-bold mb-2">
            Course Quality Improvement in Design Education. Journal of Technology Education
          </h3>
          <p className="text-gray-600">Purdue University</p>
        </Link>

      </div>
    </div>
  );
};

export default ResearchPapers;