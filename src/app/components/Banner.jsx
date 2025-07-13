const Banner = () => {
  return (
    <section className="mx-auto my-16 px-6 pt-24">
      <div className="flex flex-col md:flex-row items-center gap-10">
    
        <div className="md:w-1/2">
          <img
            src="/college-banner.webp"  
            alt="College campus"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

      
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-sky-700">
            Welcome to CollegeMate
          </h1>
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Your Ultimate College Discovery Platform
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Find detailed information about colleges, admission dates, exciting events, latest research, and sports updates.  
            All you need to choose your perfect college is here — easy, fast, and reliable.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Banner;
