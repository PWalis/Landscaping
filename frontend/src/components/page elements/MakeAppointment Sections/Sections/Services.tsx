import ServicesButtons from "../UI/ServicesButtons.tsx";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setAdditionalService } from "../../../../ReduxStore/AppointmentDataSlice.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore/Store.ts";
import { motion } from "framer-motion";

interface ServicesProps {
  serviceQuestion: string;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  setServices: (services: string[]) => void;
  key: string;
}

const Services: FC<ServicesProps> = ({
  serviceQuestion,
  submitHandler,
  setServices,
  key,
}) => {
  const [showInput, setShowInput] = useState(false);
  const store = useSelector((state: RootState) => state.appointmentData);
  const dispatch = useDispatch();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Toggle the state to show/hide the input
    setShowInput((prevShowInput) => !prevShowInput);
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAdditionalService(e.target.value));
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      className="flex justify-center h-screen m-auto flex-col w-1/2 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={key}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold justify-center align-middle mb-10">
          {serviceQuestion}
        </h1>
        {/* SERVICES BUTTONS LOCATED IN UI/ServicesButtons.tsx */}
        <div className="flex flex-row gap-3 justify-center">
          <ServicesButtons title={"Landscaping"} updateState={setServices} />
          <ServicesButtons title={"Irrigation"} updateState={setServices} />
          <ServicesButtons title={"Maintenance"} updateState={setServices} />
        </div>

        {/* Button to toggle input visibility */}
        <button
          className="text-green-500 underline cursor-pointer focus:outline-none p-3"
          onClick={handleButtonClick}
        >
          Need something else?
        </button>

        {/* Input Section */}

        <div className="mt-4 w-[500px] h-[40px]">
          <input
            type="text"
            onChange={onchange}
            value={store.value.additionalService}
            placeholder="Please enter details about your service needs"
            className={`text-zinc-500 w-[500px] h-10 focus:outline-none px-2 font-bold text-xl font-sans2 ${
              showInput ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
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

export default Services;
