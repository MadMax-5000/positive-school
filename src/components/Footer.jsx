import { FaInstagram, FaFacebookF } from "react-icons/fa";

const links = [
  {
    href: "https://www.instagram.com/positivesch2ol/",
    icon: <FaInstagram size={25} />,
  },
  {
    href: "https://www.facebook.com/positivesch2ol/",
    icon: <FaFacebookF size={25} />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-white transition-colors duration-500 ease-in-out hover:text-black flex items-center justify-center"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="font-exo2">
          <p className="uppercase text-center text-lg font-light md:text-left">
            © positive school. all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
