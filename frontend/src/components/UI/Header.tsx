import { type FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);


  return (
    <header className={`fixed inset-x-0 p-5 flex flex-row justify-between items-center z-10 text-white bg-opacity-35 bg-stone-300 transition-all duration-500 ${isScrolled ? "bg-opacity-100 h-16" : "h-28"}`}>
      <div className="flex gap-10">
        <h1 className="font-bold text-3xl">{title}</h1>
        <nav className={`flex justify-items-star p-3 gap-10 `}>
          <Link
            to="/contact"
            className="text-white font-bold border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500"
          >
            Contact Us
          </Link>
          <Link to="/services" className="text-white font-bold">
            Services
          </Link>
        </nav>
      </div>
      <div className="flex gap-1 list-none">
        {/*Using a link instead of a button: provides the error handling if button is clicked multiple times*/}
        <Link
          to="/contact"
          className={`bg-green-400 hover:bg-green-300 text-white font-bold px-4 transition-all duration-500 ${isScrolled ? "py-2" : "py-6"}`}
        >
          Schedule Your Appointment Today
        </Link>
      </div>
    </header>
  );
};

export default Header;
