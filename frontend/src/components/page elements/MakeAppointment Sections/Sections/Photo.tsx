import { type FC } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../ReduxStore/AppointmentDataSlice";
import { motion } from "framer-motion";

interface PhotoProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formQuestion: string;
  key: string;
}

const Photo: FC<PhotoProps> = ({ formQuestion, submitHandler, key }) => {
  const dispatch = useDispatch();

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const photo = window.URL.createObjectURL(files![0]);

    dispatch(addImage([photo]));
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
        className="w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans text-white"
        type="file"
        id="photo"
        onChange={uploadPhoto}
        multiple
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

export default Photo;
