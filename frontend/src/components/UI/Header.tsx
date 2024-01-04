import { type FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed inset-x-0 p-5 flex flex-row justify-between items-center z-10 text-white bg-emerald-100 bg-opacity-25">
      <div className="flex gap-3">
        <h1 className="font-bold text-3xl">{title}</h1>
        <nav className="flex justify-items-start ">
          <ul className="pt-3 flex gap-10 items-baseline list-none">
            <li>
              <Link
                to="/contact"
                className="text-white font-bold border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white font-bold">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-1 list-none">
        {/*Using a link instead of a button: provides the error handling if button is clicked multiple times*/}
        <Link
          to="/contact"
          className="bg-green-400 hover:bg-green-300 text-white font-bold py-6 px-4 transition duration-200"
        >
          Schedule Your Appointment Today
        </Link>
      </div>
    </header>
  );
};

export default Header;
