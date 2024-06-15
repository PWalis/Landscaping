import { type FC, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import HamburgerIcon from "../../assets/hamburger-menu.svg";
import DropdownNav from "./DropdownNav";
smoothscroll.polyfill();

interface HeaderProps {
  title: string;
  servicesYPosition: number;
  isScrolled: boolean;
}

const HeaderDesktop: FC<HeaderProps> = ({
  title,
  servicesYPosition,
  isScrolled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  const isGalleryPage = location.pathname === "/gallery";
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isGalleryPage || isHomePage) {
      // Scroll to the top of the page when isGalleryPage is true
      window.scrollTo({ top: 0 });
    }
  }, [isGalleryPage, isHomePage]);

  return (
    <header
      className={`fixed inset-x-0 pr-4 pl-4 flex flex-row justify-between items-center z-50 bg-gray-900 font-sans2 uppercase transition-all duration-500 ${
        isScrolled
          ? `h-20 ${
              servicesYPosition < 200
                ? "bg-opacity-100 text-gray-100"
                : "bg-opacity-50 text-gray-100"
            }`
          : "h-28 bg-opacity-0 text-white "
      }`}
    >
      <div className="sm:flex flex-wrap gap-10 items-baseline relative">
        <h1 className="font-bold text-2xl ">
          {(isHomePage ? <HashLink smooth to="#home">{title}</HashLink> : <Link to="/">{title}</Link> )}
          
        </h1>
        <nav
          className={`hidden text-sm font-bold md:flex md:gap-10 md:flex-row hover:text-white md:visible`}
        >
          {(!isGalleryPage && !isContactPage) ? (
            <>
              <HashLink smooth to="#services">
                Services
              </HashLink>
              <HashLink smooth to="#testimonials">
                Testimonials
              </HashLink>
              <HashLink smooth to="#BeforeAndAfter">
                Projects
              </HashLink>
              <Link to="/contact" className="">
                Call Us
              </Link>
            </>
          ) : (
            <Link to="/" className="">
              Home
            </Link>
          )}
        </nav>
      </div>
      <div onClick={toggleMenu} className="md:hidden z-50">
        <img src={HamburgerIcon} alt="Menu" />
      </div>

      <div className="hidden xl:flex xl:gap-2 xl:list-none">
        {!isGalleryPage && (
          <Link
            to="/gallery"
            className="flex border-2 border-gray-100 hover:bg-white/20 transition duration-300 text-white text-sm font-bold py-4 px-10 items-center"
          >
            {" "}
            View Gallery{" "}
          </Link>
        )}
        <Link
          to="/makeAppointment"
          className=" text-sm flex bg-green-500/80 font-bold hover:bg-green-500 text-white py-5 px-4 transition duration-300 items-center"
        >
          Schedule Your Appointment Today
        </Link>
      </div>
        <DropdownNav isOpen={isOpen} isScrolled={isScrolled} servicesYPosition={servicesYPosition}/>
    </header>
  );
};

export default HeaderDesktop;
