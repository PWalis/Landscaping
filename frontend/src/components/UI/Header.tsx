import { type FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  servicesYPosition: number;
  isScrolled: boolean;
}

const Header: FC<HeaderProps> = ({ title, servicesYPosition, isScrolled }) => {


  return (
    <header className={`fixed inset-x-0 p-2 pl-7 pr-7 flex flex-row justify-between items-center z-50 bg-gray-900 text-gray-300 font-sans2 uppercase transition-all duration-500 ${isScrolled ? (`h-20 ${servicesYPosition<200 ? "bg-opacity-100": "bg-opacity-50"}`) : "h-28 bg-opacity-0"}`}>
      <div className="flex gap-10 items-baseline">
        <h1 className="font-bold text-xl ">{title}</h1>
        <nav className="flex gap-10">
          <Link
            to="/contact"
            className=" text-sm font-bold hover:text-white"
          >
            Contact Us
          </Link>
          <Link to="/services" className="text-sm font-bold hover:text-white">
            Services
          </Link>
        </nav>
      </div>
      <div className="flex gap-1 list-none">
        {/*Using a link instead of a button: provides the error handling if button is clicked multiple times*/}
        <Link to="/gallery" className="flex border-2 border-gray-300/80 text-gray-300 text-sm font-bold py-4 px-10 items-center"> View Gallery </Link>
        <Link
          to="/contact"
          className=" text-sm flex bg-green-500/80 font-bold hover:bg-green-500 text-white py-5 px-4 transition duration-200 items-center"
        >
          Schedule Your Appointment Today
        </Link>
      </div>
    </header>
  );
};

export default Header;
