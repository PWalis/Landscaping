import { type FC } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setDate } from "../../../../ReduxStore/AppointmentDataSlice";
import { motion } from "framer-motion";

interface DateRangeProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formQuestion: string;
  key: string;
}

const DateRange: FC<DateRangeProps> = ({
  submitHandler,
  formQuestion,
  key,
}) => {
  const dispatch = useDispatch();

  const handleOnChange = (date: Date | null) => {
    dispatch(setDate(dayjs(date).format("YYYY-MM-DD")));
    console.log(dayjs(date).format("YYYY-MM-DD"));
  };

  return (
    <motion.form
      className="flex flex-col justify-center align-middle m-auto h-screen"
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={key}
    >
      <label className="text-5xl text-gray-100 font-bold pb-5 mx-auto">
        {formQuestion}
      </label>
      <div className="flex justify-center gap-0 mx-auto bg-gray-100 rounded-lg w-1/5 pt-5">
        <DateCalendar sx={{ margin: 0 }} onChange={handleOnChange} />
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

export default DateRange;
