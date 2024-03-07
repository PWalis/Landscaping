import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface DropdownNavProps {
  isOpen: boolean;
  isScrolled: boolean;
  servicesYPosition: number;
}

const DropdownNav: FC<DropdownNavProps> = ({
  isOpen,
  isScrolled,
  servicesYPosition,
}) => {
  const isGalleryPage = location.pathname === "/gallery";

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.nav
        className={`flex justify-center absolute h-[130px] w-full left-0 bg-gray-900`}
          
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <ul className="mt-7">
          {!isGalleryPage ? (
            <>
              <li>
                <Link to="/gallery" className="">
                  Gallery
                </Link>
              </li>
              <li>
                <HashLink smooth to="#services">
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#testimonials">
                  Testimonials
                </HashLink>
              </li>
              <li>
                <Link to="/contact" className="">
                  contact us
                </Link>
              </li>
            </>
          ) : (
            <Link to="/" className="">
              Home
            </Link>
          )}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default DropdownNav;
