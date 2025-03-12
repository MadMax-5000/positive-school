import { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, imageClassName = "" }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        className={`absolute left-0 top-0 size-full grayscale ${imageClassName}`}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base font-robert-regular">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <section className="bg-black pb-20">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-robert-medium text-3xl text-white text-pretty tracking-tight">
            DISCOVER OUR PROGRAMS
          </p>

          <p className="max-w-md font-robert-medium text-2xl text-white opacity-50 tracking-tight">
            Our programs will help you refine your skills in RAP, Dance, Music,
            and Street Art. <br /> Learn more below ...
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src="images/rap.jpg"
            title={
              <>
                R<b>A</b>P
              </>
            }
            description="Our rap program helps you refine your style and master the techniques that set great rappers apart."
            imageClassName="object-cover"
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-2 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="images/dance.jpg"
              title={
                <>
                  <b>D</b>ANCE
                </>
              }
              description="You will learn how you develop style, precision, and confidence."
              imageClassName="object-none brightness-50"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="images/djtarik.jpg"
              title={
                <>
                  D<b>J</b>ing
                </>
              }
              description="Learn the fundamentals of mixing, scratching
                and beat-matching from experienced DJs."
              imageClassName="object-cover brightness-50"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 object">
            <BentoCard
              src="images/graffiti.jpg"
              title={
                <>
                  GRA<b>FF</b>ITI
                </>
              }
              description="Turn walls into works of art and bring your ideas to life through graffiti"
              imageClassName="object-cover brightness-50"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Programs;
