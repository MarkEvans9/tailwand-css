import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`h-20 flex justify-between items-center text-white mx-auto max-w-[1240px] px-4 fixed top-0 left-0 right-0 transition duration-300 ease-in-out  bg-black z-30
      ${visible ? "opacity-100" : "opacity-0 -translate-y-full "}
      `}
    >
      <h1 className=" text-3xl font-bold text-[#00df9a] cursor-pointer">
        Logo
      </h1>
      <ul className=" hidden md:flex">
        <li className=" p-3 cursor-pointer">Home</li>
        <li className=" p-3 cursor-pointer">About</li>
        <li className=" p-3 cursor-pointer">Contact</li>
        <li className=" p-3 cursor-pointer">Services</li>
      </ul>
      <div className="px-4 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <AiOutlineClose size={20} className="cursor-pointer " />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          menuOpen
            ? "fixed top-20 right-0 w-[40%] h-full border-l md:border-none border-l-gray-900 ease duration-500 bg-black z-10"
            : "fixed ease-in duration-700 right-[-100%] top-20 h-full w-[40%] "
        }
      >
        <ul className="uppercase py-4 md:hidden">
          <li className=" p-4 cursor-pointer hover:bg-slate-700  border-b border-gray-600">
            Home
          </li>
          <li className=" p-4 cursor-pointer hover:bg-slate-700 border-b border-gray-600">
            About
          </li>
          <li className=" p-4 cursor-pointer hover:bg-slate-700 border-b border-gray-600">
            Contact
          </li>
          <li className=" p-4 cursor-pointer hover:bg-slate-700 border-b border-gray-600">
            Services
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
