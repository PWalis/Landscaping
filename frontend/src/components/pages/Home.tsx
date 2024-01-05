import { type FC } from "react";
import Header from "../UI/Header";
import Main from "../page elements/Home Sections/Main.tsx";
import Services from "../page elements/Home Sections/Services.tsx";

const Home: FC = () => {
  return (
    <>
      <Header title="Isai's Landscaping" />
      <Main />
      <Services />
    </>
  );
};

export default Home;
