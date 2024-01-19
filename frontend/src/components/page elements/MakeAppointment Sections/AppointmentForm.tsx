import { type FC } from "react";
import Services from "./Sections/Services.tsx";
import TextInput from "./Sections/TextInput.tsx";
import DateRange from "./Sections/DateRange.tsx";
import Photo from "./Sections/Photo.tsx";

interface AppointmentFormProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formQuestion: string;
  formType: string;
}

const AppointmentForm: FC<AppointmentFormProps> = ({
  submitHandler,
  formQuestion,
  formType,
}) => {
  const form: any = {
    TextInput: (
      <TextInput formQuestion={formQuestion} submitHandler={submitHandler} />
    ),
    Services: (
      <Services serviceQuestion={formQuestion} submitHandler={submitHandler} />
    ),
    DateRange: (
      <DateRange formQuestion={formQuestion} submitHandler={submitHandler} />
    ),
    Photo: (
      <Photo formQuestion={formQuestion} submitHandler={submitHandler}/>
    ) 
  };

  return <>{form[formType]}</>;
};

export default AppointmentForm;
