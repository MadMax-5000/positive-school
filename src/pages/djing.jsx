export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 md:py-20">
        <h1 className="font-akira tracking-wide relative mt-12 text-center text-4xl md:text-8xl font-black bg-clip-text text-transparent text-white animate-pulse">
          DJING
        </h1>
        <p className="text-center mt-4">
          The heartbeat of every party. Scratching, mixing, and dropping beats{" "}
          <br />
          that make people move—turntables don’t lie.
        </p>
      </header>

      {/* Image Gallery */}
      <main className="container mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (1).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (2).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (3).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (4).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (5).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (6).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 7 */}
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <img
              src="images\djing\dj (7).JPG"
              alt="Portfolio image"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
