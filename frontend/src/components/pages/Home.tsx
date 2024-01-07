import { type FC } from "react";
import Header from "../UI/Header";
import Main from "../page elements/Home Sections/Main.tsx"
import Services from "../page elements/Home Sections/Services.tsx";
import Testimonials from "../page elements/Home Sections/Testimonials.tsx";
import Footer from "../UI/Footer.tsx"

const Home: FC = () => {
  return (
    <>
      <Header title="Isai's Landscaping" />
      <Main />
      <Services />
        <Testimonials />
        <Footer />
    </>
  );
};

export default Home;
