import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi"; // Import mobile menu icons

const Navbar = () => {
  const navContainerRef = useRef(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { name: "Home", path: "/", isExternal: false },
      { name: "Merch", path: "#merch", isExternal: false },
      {
        name: "Events",
        path: "https://positivesch2ol.com/merch/events/",
        isExternal: true,
      },
      {
        name: "Programs",
        path: "https://positivesch2ol.com/merch/programs/",
        isExternal: true,
      },
      { name: "About", path: "/about-us", isExternal: false },
      { name: "Contact", path: "/about-us#contact", isExternal: false },
    ],
    []
  );

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleNavItemClick = (path, isExternal) => {
    setMobileMenuOpen(false);

    if (isExternal) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-sm shadow-lg"
    >
      {/* Navbar Header */}
      <header className="relative flex items-center justify-between h-16 md:h-14 px-4">
        {/* Logo - Extreme Left */}
        <div className="flex items-center ml-[-30px]">
          <img
            src="images/pslogo.png"
            alt="Logo"
            className="w-20 h-auto md:w-30 md:h-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex gap-x-10">
          {navItems.map(({ name, path, isExternal }) => (
            <a
              key={name}
              href={path}
              className="nav-hover-btn text-white hover:text-gray-300"
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop "Join NOW" Button */}
        <div className="hidden md:block">
          <Button
            id="join-button"
            title="Join NOW"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-white/90 hover:bg-white flex items-center justify-center gap-1 shadow-md rounded-lg"
            onClick={() => navigate("/about-us")}
          />
        </div>

        {/* Mobile Menu Toggle - Extreme Right */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX size={36} className="text-white" />
          ) : (
            <HiMenu size={36} className="text-white" />
          )}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-black/80 backdrop-blur-lg text-white flex flex-col shadow-lg max-h-[80vh] overflow-y-auto"
          onClick={(e) => {
            if (e.target.tagName === "NAV") {
              setMobileMenuOpen(false);
            }
          }}
        >
          {navItems.map(({ name, path, isExternal }) => (
            <button
              key={name}
              onClick={() => handleNavItemClick(path, isExternal)}
              className="text-left py-4 px-6 text-lg font-medium border-b border-gray-700/50 hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              {name}
            </button>
          ))}

          {/* Mobile "Join NOW" Button */}
          <div className="p-6">
            <Button
              id="join-button-mobile"
              title="Join NOW"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-white/90 hover:bg-white flex items-center justify-center gap-1 w-full py-4 text-lg font-bold shadow-md rounded-lg"
              onClick={() => handleNavItemClick("/about-us", false)}
            />
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
