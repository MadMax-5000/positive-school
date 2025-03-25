import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Home", "Merch", "Events", "Programs", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 h-16 border-none bg-black backdrop-blur-sm shadow-sm"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-end p-4 relative">
          {/* Centered nav items */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Join Now button */}
          <Button
            id="join-button"
            title="Join NOW"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-white md:flex hidden items-center justify-center gap-1"
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
