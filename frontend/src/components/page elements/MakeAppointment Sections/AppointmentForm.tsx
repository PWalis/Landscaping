import { type FC } from "react";

interface AppointmentFormProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formQuestion: string;
}

const AppointmentForm: FC<AppointmentFormProps> = ({
  submitHandler,
  formQuestion,
}) => {
  return (
    <div className="flex justify-center h-screen w-screen">
      <form className="m-auto flex flex-col w-1/2" onSubmit={submitHandler}>
        <label className="text-5xl text-gray-100 font-bold">
          {formQuestion}
        </label>
        <input className=" w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans" type="text" />
        <div className="flex justify-end pt-2">
          <button
            className="border-2 border-gray-200 bg-gray-200 text-gray-900 py-1 w-20 text-lg font-bold "
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
