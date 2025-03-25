import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Djing from "./pages/djing";
import Footer from "./components/Footer";
import AnimatedSections from "./components/GetStarted";
import Graffiti from "./pages/graffiti";
import Hero from "./components/hero";
import RAP from "./pages/rap";
import MerchSection from "./components/MerchSection";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";
import AboutUs from "./pages/AboutUs";
import Dance from "./pages/Dance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        <CustomCursor />
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Programs />
                <MerchSection />
                <SuccessStories />
                <AnimatedSections />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/djing" element={<Djing />} />
          <Route path="/graffiti" element={<Graffiti />} />
          <Route path="/rap" element={<RAP />} />
          <Route path="/dance" element={<Dance />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
