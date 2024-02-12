import { type FC, useState, useEffect, useRef } from "react";
import Header from "../UI/Header";
import Main from "../page elements/Home Sections/Main.tsx";
import Services from "../page elements/Home Sections/Services.tsx";
import Testimonials from "../page elements/Home Sections/Testimonials.tsx";
import Footer from "../UI/Footer.tsx";

const Home: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [servicesYPosition, setServicesYPosition] = useState<number>(0);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (servicesRef.current) {
      setServicesYPosition(servicesRef.current.getBoundingClientRect().top);
    }

   

    return () => window.removeEventListener("scroll", handleScroll);
  }, [servicesRef.current?.getBoundingClientRect().top]);

  //debugging logs
  // console.log(servicesYPosition, scrollPosition);

  return (
    <>
      <Header
        title="Isai's Landscaping"
        servicesYPosition={servicesYPosition}
        isScrolled={scrollPosition > 0 ? true : false}
      />
      <Main />
      <Services ref={servicesRef} />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
