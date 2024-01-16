import { type FC } from "react";

interface TextInputProps {
  formQuestion: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ formQuestion, submitHandler }) => {
  return (
    <form
      className="flex justify-center h-screen m-auto flex-col w-1/2 text-white"
      onSubmit={submitHandler}
    >
      <label className="text-5xl text-gray-100 font-bold pb-5">
        {formQuestion}
      </label>
      <input
        className=" w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-black"
        type="text"
      />
      <div className="flex justify-center pt-10">
        <button
          className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 py-3 px-8 text-lg font-bold font-sans2"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default TextInput;
0;
