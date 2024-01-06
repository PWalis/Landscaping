import { type FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed inset-x-0 p-2 pl-7 pr-7 flex flex-row justify-between items-center z-10 text-green-700/90 bg-stone-200 font-sans2 uppercase">
      <div className="flex gap-10 items-baseline">
        <h1 className="font-bold text-xl">{title}</h1>
        <nav className="flex text-green-700/60 gap-10">
          <Link
            to="/contact"
            className=" text-sm font-bold"
          >
            Contact Us
          </Link>
          <Link to="/services" className="text-sm font-bold">
            Services
          </Link>
        </nav>
      </div>
      <div className="flex gap-3 list-none ">
        {/*Using a link instead of a button: provides the error handling if button is clicked multiple times*/}
        <Link to="/gallery" className="flex border-2 border-green-700/60 text-green-700/60 text-sm font-bold py-4 px-10 items-center"> View Gallery </Link>
        <Link
          to="/contact"
          className=" text-sm flex bg-green-700/90 font-bold hover:bg-green-300 text-white py-5 px-4 transition duration-200 items-center"
        >
          Schedule Your Appointment Today
        </Link>
      </div>
    </header>
  );
};

export default Header;
