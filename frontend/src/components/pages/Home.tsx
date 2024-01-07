import { type FC, useState, useEffect, useRef } from "react";
import Header from "../UI/Header";
import Main from "../page elements/Home Sections/Main.tsx"
import Services from "../page elements/Home Sections/Services.tsx";

const Home: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [servicesYPosition, setServicesYPosition] = useState<number>(0);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesYPosition: number = () => {
    let position: number = 0;
    return position;
  };


  return (
    <>
      <Header title="Isai's Landscaping" background_color="" />
      <Main />
      <Services />

    </>
  );
};

export default Home;
