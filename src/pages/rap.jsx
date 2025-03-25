const RAP = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 md:py-20">
        <h1 className="font-robert-medium tracking-wide relative mt-12 text-center text-4xl md:text-8xl font-black bg-clip-text text-transparent text-white animate-pulse">
          RAP
          <span className="-bottom-4 absolute inset-x-0 h-2 bg-gradient-to-r from-gray-400 to-gray-600"></span>
        </h1>
      </header>

      {/* Image Gallery */}
      <main className="container mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="\images\rap\rao (1).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (2).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="/images/rap/rao (3).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (4).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (5).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (6).JPG"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 7 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (7).JPG"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 8 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (8).JPG"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 9 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (9).JPG"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 10 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (10).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 11 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images/rap/rao (11).jpg"
              alt="Rap image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RAP;
