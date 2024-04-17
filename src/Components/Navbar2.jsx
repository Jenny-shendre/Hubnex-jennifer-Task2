import React, {useState} from "react";
import { Link } from "react-router-dom";

const LogoWithText = ({ logoSrc, text, companySrc }) => (
  <div className="flex gap-2 justify-center items-center text-sm text-black">
    <img
      loading="lazy"
      src={logoSrc}
      alt="Logo"
      className="shrink-0 self-stretch w-[40px] h-[40px] aspect-[0.98]"
    />
    <div className="shrink self-stretch text-lg">{text}</div>
    <img
      loading="lazy"
      src={companySrc}
      alt="Company"
      className="shrink-0 self-stretch aspect-[3.13] w-[80px] h-[35px]"
    />
  </div>
);

const NavLink = ({ children }) => (
  <div className="self-stretch my-auto text-xl">{children}</div>
);

const navLinks = [
  { label: "About" },
  { label: "Features" },
  { label: "Customers" },
  { label: "Updates" },
  { label: "Help" },
];

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("backdrop-blur-xl");
    } else {
      document.body.classList.remove("backdrop-blur-xl");
    }
  };
  return (
    <header className="flex flex-col md:flex-row lg:flex-row justify-between px-4 py-5 bg-indigo-50 fixed top-0 w-full z-10 ">
  <div className="flex flex-row justify-between items-center">
    {/* Logo */}
    <LogoWithText
      logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2399e21353466cd56c5250c6af222bef1c918d3290ea987698196295dcb89564?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
      text="made by"
      companySrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa583df0e18954315559c1589fdd4d2001975811648846c1e57b8c2a3196b943?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
    />
    {/* Mobile Menu Button */}
    <div className="-mr-2 md:hidden">
      <button onClick={toggleMenu} className="text-gray-500 w-[48px] h-[48px] hover:text-black inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
        {/* Icon for Menu Toggle */}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  </div>
  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden text-black backdrop-blur-3xl bg-opacity-50 bg-indigo-50 fixed top-[74px] left-0 right-0 h-full w-full" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 mt-12 space-y-1 sm:px-3 ">
        {/* Your Responsive Navbar Links */}
        <a href="#" className="text-gray-700 hover:underline-offset-2 hover:text-[#5C27C0] underline-hover block px-3 py-2 rounded-md text-xl font-medium">About</a>
        <a href="#" className="text-gray-700 hover:underline-offset-2  hover:text-[#5C27C0] block px-3 py-2 mt-[200px] rounded-md text-xl font-medium">Features</a>
        <a href="#" className="text-gray-700 hover:underline-offset-2 hover:text-[#5C27C0] block px-3 py-2 rounded-md text-xl font-medium">Customers</a>
        <a href="#" className="text-gray-700 hover:underline-offset-2 hover:text-[#5C27C0] block px-3 py-2 rounded-md text-xl font-medium">Updates</a>
        <a href="#" className="text-gray-700 hover:underline-offset-2 hover:text-[#5C27C0] block px-3 py-2 rounded-md text-xl font-medium">Help</a>
        {/* Add more links as needed */}
      </div>
    </div>
  )}
  {/* Desktop Navigation */}
  <nav className="hidden md:flex gap-12 md:gap-6 justify-between items-center self-start text-base tracking-normal leading-6 text-black text-opacity-60 max-md:flex-wrap">
    {navLinks.map((link, index) => (
      <NavLink key={index}>
        <a href="/">{link.label}</a>
      </NavLink>
    ))}
    <button className="justify-center md:w-[90px] md:text-sm self-stretch px-4 py-2.5 font-medium tracking-tight text-white bg-black rounded-xl">
      Get for free
    </button>
  </nav>
</header>
  );
}

export default MyComponent;
