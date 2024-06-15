import { type FC } from "react";
import beforeImage1 from "../../../assets/before-pic.jpg";
import afterImage1 from "../../../assets/after-pic.jpg";
import beforeImage2 from "../../../assets/before-pic2.jpg";
import afterImage2 from "../../../assets/after-pic2.jpg";
import BeforeAndAfterImg from "../Gallery Sections/BeforeAndAfterImg";

const BeforeAndAfter: FC = () => {
  return (
    <section
      className="h-auto bg-stone-300/40 pb-20 "
      id="BeforeAndAfter"
    >
        <h2 className="pt-20 text-4xl sm:text-5xl text-center font-bold text-green-900/65">
          {" "}
          Our Recent Projects{" "}
        </h2>
        <div className="px-10">
        <p className="text-lg text-center text-stone-700 bg-white/60  mt-5 p-5 max-w-[500px] mx-auto mb-10 ">
          {" "}
          Take a look at how we can transform your outdoor space into a place
          where you truly feel at home!{" "}
        </p></div>
        <div className="px-1">
        <div className="max-w-screen-lg mx-auto">
            <div className="mb-10">
              <BeforeAndAfterImg
                afterImage={afterImage1}
                beforeImage={beforeImage1}
              />
              </div>
              <div className="">
                            <BeforeAndAfterImg
                afterImage={afterImage2}
                beforeImage={beforeImage2}
              /></div>
          </div></div>
    </section>
  );
};

export default BeforeAndAfter;
