import { type FC, useState } from "react";
import AppointmentForm from "../page elements/MakeAppointment Sections/AppointmentForm";

const MakeAppointment: FC = () => {
  // This component will contain the logic for submitting the form data to the backend
  // The form will contain the following fields: Service type (can be multiple), time, date, email, phone number, and photos of yard(optional)
  // The form will be split into multiple components, each component will be a question

  const [count, setCount] = useState<number>(0);
  const [appointmentData, setAppointmentData] = useState<any>({services:[], date:new Date(), phoneNumber:"", email:""}); // This will be the object that will be sent to the backend
  const form = new FormData();

  for (const value of form.values()) {
    console.log("values",value);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    console.log("submitted", (e.target as HTMLInputElement).value);
    // form.append(valueName[count], e.target.value);
  };

  const testSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 10928350,
        firstName: "John",
        lastName: "Doe",
        email: "email@email.com",
        phoneNumber: 1234567890,
        zipCode: 84564,
        appointment: null,
      }),
    });
  };

  const valueName = ["services", "date", "phoneNumber", "email", "photos"];

  const appointmentFormSequence = [
    <AppointmentForm
      formQuestion="What services are you looking for?"
      submitHandler={setAppointmentData}
      formType="Services"
    />,
    <AppointmentForm
      formQuestion="What day works best for you?"
      submitHandler={setAppointmentData}
      formType="DateRange"
    />,
    <AppointmentForm
      formQuestion="What is a good number to reach you at?"
      submitHandler={setAppointmentData}
      formType="TextInput"
    />,
    <AppointmentForm
      formQuestion="What is your email?"
      submitHandler={setAppointmentData}
      formType="TextInput"
    />,
    <AppointmentForm
      formQuestion="If you have any photos of your yard please add here?"
      submitHandler={submitHandler}
      formType="Photo"
    />,
  ];

  return (
    <>
      {appointmentFormSequence[count]}
      <div className="bg-image-2"></div>
    </>
  );
};

export default MakeAppointment;
