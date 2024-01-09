import { type FC, useState } from "react";
import AppointmentForm from "../page elements/MakeAppointment Sections/AppointmentForm";

const MakeAppointment: FC = () => {
  // This component will contain the logic for submitting the form data to the backend
  // The form will contain the following fields: Service type (can be multiple), time, date, email, phone number, and photos of yard(optional)
  // The form will be split into multiple components, each component will be a question

  const [formQuestion, setFormQuestion] = useState<string>("")

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
  };

  return (
    <>
      <AppointmentForm
        formQuestion="What the fuck?"
        submitHandler={submitHandler}
      />
      <div className="bg-image-2"></div>
    </>
  );
};

export default MakeAppointment;
