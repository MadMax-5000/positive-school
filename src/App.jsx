import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import AnimatedSections from "./components/GetStarted";
import Hero from "./components/hero";
import MerchSection from "./components/MerchSection";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <MerchSection />
      <SuccessStories />
      <AnimatedSections />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
