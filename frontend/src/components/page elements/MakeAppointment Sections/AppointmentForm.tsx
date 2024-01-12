import {type FC} from "react";
import ServicesButtons from "./UI/ServicesButtons.tsx";
import Services from "./Sections/Services.tsx";
import SubmitButton from "./UI/SubmitButton.tsx";

interface AppointmentFormProps {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    formQuestion: string;
    servicesQuestion: string;
}

const AppointmentForm: FC<AppointmentFormProps> = ({
                                                   }) => {
    return (
        <div className="flex justify-center h-screen m-auto flex-col w-1/2 text-white">
            {/*<form className="m-auto flex flex-col w-1/2 text-white" onSubmit={submitHandler}>*/}
                {/*<label className="text-5xl text-gray-100 font-bold pb-5">*/}
                {/*  {formQuestion}*/}
                {/*</label>*/}
                {/*<input className=" w-auto h-10 rounded-xl focus:outline-none px-2 font-bold text-xl font-sans"*/}
                {/*       type="text"/>*/}
                {/*<div className="flex justify-center pt-2">*/}
                {/*</div>*/}
            {/*</form>*/}
          {/*SERVICES PORTION*/}

          <Services serviceQuestion="What services are you interested in? "></Services>
            <div className="flex justify-center">
            <button
                className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 pt-3 pb-3 pl-8 pr-8 fixed bottom-20 text-lg font-bold font-sans2"
                type="submit"
            >
                Next
            </button>
            </div>
          </div>
    );
};

export default AppointmentForm;
