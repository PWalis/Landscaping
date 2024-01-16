import { type FC } from "react";

const Photo: FC = () => {
  return (
    <div className="flex justify-center h-screen m-auto flex-col w-1/2 text-white">
      <label className="text-5xl text-gray-100 font-bold pb-5">
        Upload a photo of your yard
      </label>
      <input
        className=" w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-black"
        type="file"
      />
      <div className="flex justify-center pt-10">
        <button
          className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 py-3 px-8 text-lg font-bold font-sans2"
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Photo;
