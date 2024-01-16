import { type FC, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";

interface DateRangeProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formQuestion: string;
}

const DateRange: FC<DateRangeProps> = ({ submitHandler, formQuestion }) => {
  return (
    <form className="flex flex-col justify-center align-middle m-auto h-screen ">
      <label className="text-5xl text-gray-100 font-bold pb-5 mx-auto">
        {formQuestion}
      </label>
      <div className="flex justify-center gap-0 mx-auto bg-gray-100 rounded-lg w-1/5 pt-5">
        <DateCalendar sx={{ margin: 0 }} />
      </div>
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

export default DateRange;
