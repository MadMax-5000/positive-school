import ModelViewer1 from "./ModelViewer1";
import VinylScene from "./ModelViewer2";
import HeadsetScene from "./ModelViewer3";

const Hero = () => {
  return (
    <div className="h-screen relative ">
      <div>
        <ModelViewer1 />
        <VinylScene />
        <HeadsetScene />
      </div>
      <p className="relative text-center text-2xl bottom-24 text-white font-robert-medium mr-14">
        © SOUNI3A FI ALMAGHRIB
      </p>
    </div>
  );
};

export default Hero;
