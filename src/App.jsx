import { lazy, Suspense, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

const Hero = lazy(() => import("./components/hero"));
const About = lazy(() => import("./components/About"));
const Programs = lazy(() => import("./components/Programs"));
const MerchSection = lazy(() => import("./components/MerchSection"));
const SuccessStories = lazy(() => import("./components/SuccessStories"));
const AnimatedSections = lazy(() => import("./components/GetStarted"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Video = lazy(() => import("./components/Videocomponent"))


// Lazy-loaded routes
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Djing = lazy(() => import("./pages/djing"));
const Graffiti = lazy(() => import("./pages/graffiti"));
const RAP = lazy(() => import("./pages/rap"));
const Dance = lazy(() => import("./pages/dance"));
// Loading fallback component
const Loader = () => <div className="text-white text-center">Loading...</div>;

const App = () => {
  // Memoize static components
  const memoizedNavbar = useMemo(() => <Navbar />, []);
  const memoizedCursor = useMemo(() => <CustomCursor />, []);

  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        {memoizedCursor}
        {memoizedNavbar}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Programs />
                  <Video/>
                  <MerchSection />
                  <SuccessStories />
                  <AnimatedSections />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Lazy-loaded Routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/djing" element={<Djing />} />
            <Route path="/graffiti" element={<Graffiti />} />
            <Route path="/rap" element={<RAP />} />
            <Route path="/dance" element={<Dance />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
