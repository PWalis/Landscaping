import { type FC } from "react";
// import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import HamburgerIcon from "../../assets/hamburger-menu.svg"
smoothscroll.polyfill();


interface HeaderProps {
  title: string;
  servicesYPosition: number;
  isScrolled: boolean;
}

const HeaderMobile: FC<HeaderProps> = ({title, servicesYPosition, isScrolled}) => {



  return (
      <header
          className={`fixed inset-x-0 p-2 pl-7 pr-7 flex flex-row justify-between items-center z-50 bg-gray-900 font-sans2 uppercase transition-all duration-500 ${isScrolled ? (`h-20 ${servicesYPosition < 200 ? "bg-opacity-100 text-gray-100" : "bg-opacity-50 text-gray-100"}`) : "h-28 bg-opacity-0 text-white "}`}>
        <div className="flex gap-10 items-baseline">
          <h1 className="font-bold text-2xl "><Link to="/">{title}</Link></h1>
          <nav className="flex gap-10 text-sm font-bold hover:text-white">
            <img src={HamburgerIcon} alt="" />
        </nav>
        </div>
      </header>
  );
};

export default HeaderMobile;
