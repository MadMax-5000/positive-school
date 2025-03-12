import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen bg-black">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-white text-center text-6xl font-robert-medium tracking-tighter">
          WELCOME TO POSITIVE SCHOOL
        </h2>

        <AnimatedTitle
          title="Disc<b>o<b/>ver morocco's <br />largest <b>h<b/>ip <b>h<b/>op community"
          containerClass="mt-5 !text-white text-center !text-7xl"
        />
        <div className="about-subtext">
          <p className="font-robert-medium tracking-tight leading-6">
            JOIN US AS WE SHAPE THE NEXT GENERATION OF RAPPERS, DJs, DANCERS and
            GRAFFITI ARTISTS
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/images/about-page.jpg"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
