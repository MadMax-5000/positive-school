export default function Portfolio() {
  const imagePaths = [
    "/images/new/DSC05601.JPG",
    "/images/new/DSC05604.JPG",
    "/images/new/KK47.JPG",
    "/images/new/KK48.JPG",
    "/images/new/KK52.JPG",
    "/images/new/KK55.JPG",
    "/images/new/KK58.JPG",
    "/images/new/KK61.JPG",
    "/images/new/KK63.JPG",
    "/images/new/KK70.JPG",
    "/images/new/KK77.JPG",
    "/images/new/KK92.JPG",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 md:py-20">
        <h1 className="font-akira tracking-wide relative mt-12 text-center text-4xl md:text-8xl font-black bg-clip-text text-white animate-pulse">
          DJING
        </h1>
        <p className="text-center mt-4">
          The heartbeat of every party. Scratching, mixing, and dropping beats <br />
          that make people move—turntables don’t lie.
        </p>
      </header>

      {/* Image Gallery */}
      <main className="container mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {imagePaths.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:z-10"
            >
              <img
                src={src}
                alt={`Portfolio image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
