const Gallery = () => {
  return (
    <div className="pb-24 px-4">
      <h2 className="text-4xl text-center text-sky-700 font-bold mb-8">Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-3">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate1.jpg" alt="Graduate 1" />
        </div>

        <div className="lg:col-span-3">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate2.avif" alt="Graduate 2" />
        </div>

        <div className="lg:col-span-6">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate3.jpg" alt="Graduate 3" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate4.jpg" alt="Graduate 4" />
        </div>

        <div className="lg:col-span-6">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate5.webp" alt="Graduate 5" />
        </div>

        <div className="lg:col-span-3">
          <img className="h-56 w-full object-cover rounded-lg" src="/graduate6.jpg" alt="Graduate 6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
