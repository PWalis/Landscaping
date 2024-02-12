import { UnknownAction } from "@reduxjs/toolkit";
import { type FC } from "react";
import { useDispatch } from "react-redux";
import {motion} from "framer-motion";

interface TextInputProps {
  formQuestion: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  storeReducerFunction: (text: string) => UnknownAction;
  storeValue: string;
  key: string;
}

const TextInput: FC<TextInputProps> = ({ formQuestion, submitHandler, storeReducerFunction, storeValue, key }) => {
  const dispatch = useDispatch();

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(storeReducerFunction(e.target.value)); // this should maybe be a thunk function instead of a direct dispatch
  };

  return (
    <motion.form
      className="flex justify-center h-screen m-auto flex-col w-1/2 text-white"
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={key}
    >
      <label className="text-5xl text-gray-100 font-bold pb-5">
        {formQuestion}
      </label>
      <input
        className=" w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-black"
        type="text"
        key={formQuestion}
        onChange={onchangeHandler}
        value={storeValue}
        autoFocus={true}
      />
      <div className="flex justify-center pt-10">
        <button
          className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 py-3 px-8 text-lg font-bold font-sans2"
          type="submit"
        >
          Next
        </button>
      </div>
    </motion.form>
  );
};

export default TextInput;
0;
