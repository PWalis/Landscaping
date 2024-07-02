import { type FC } from "react";
import beforeImage1 from "../../../assets/before-pic.jpg";
import afterImage1 from "../../../assets/after-pic.jpg";
import beforeImage2 from "../../../assets/before-pic2.jpg";
import afterImage2 from "../../../assets/after-pic2.jpg";
import BeforeAndAfterImg from "../Gallery Sections/BeforeAndAfterImg";

const BeforeAndAfter: FC = () => {
  return (
    <section

      className="h-auto bg-stone-300/40 flex items-center justify-center"
      id="BeforeAndAfter"
    >
      <div className="mt-20 mb-5">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-green-900/65">
          {" "}
          Before and After{" "}
        </h1>
        <p className="text-lg text-center text-stone-900  m-10 p-5 bg-stone-300">
          {" "}
          Take a look at how we can transform your outdoor space into a place
          where you truly feel at home!{" "}
        </p>
        <div className="flex flex-col gap-2 text-center justify-center items-center">
          <div className="max-w-[1000px] p-1">
            <BeforeAndAfterImg
              afterImage={afterImage1}
              beforeImage={beforeImage1}
            />
            <p className="text-justify text-stone-800/80  bg-stone-300/60 m-10 p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quae, omnis consequuntur molestias nisi assumenda excepturi
              provident sunt enim at dicta deleniti repellat, quos neque tempora
              aliquam, nam ipsam officiis.
            </p>
            <BeforeAndAfterImg
              afterImage={afterImage2}
              beforeImage={beforeImage2}
            />
            <p className="text-justify text-stone-800/80 bg-stone-300/60  m-10 p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quae, omnis consequuntur molestias nisi assumenda excepturi
              provident sunt enim at dicta deleniti repellat, quos neque tempora
              aliquam, nam ipsam officiis.
            </p>
          </div>
        </div>
        <div className="gap-5 max-w-7xl text-center items-center text-4xl mb-5 flex flex-col">
          <h2>Call Now | (623) 666-2727</h2>
          <a href="/gallery" className="border-black border-2 p-3 w-fit hover:text-white hover:bg-gray-900 transition-all ease-in-out">View Galley</a>
        </div>
      </div>

    </section>
  );
};

export default BeforeAndAfter;
