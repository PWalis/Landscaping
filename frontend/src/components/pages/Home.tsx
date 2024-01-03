import { type FC } from "react";
import Header from "../UI/Header";

const Home: FC = () => {
  return (
    <>
      <Header title="Isai's Landscaping" />
      <main>
        <section>
          <img></img>
          <div>
            <p>
              Your yard is your outdoor sanctuary we're here to help you make the most of it
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
