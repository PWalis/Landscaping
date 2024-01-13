import { type FC, useState } from "react";
import AppointmentForm from "../page elements/MakeAppointment Sections/AppointmentForm";

const MakeAppointment: FC = () => {
  // This component will contain the logic for submitting the form data to the backend
  // The form will contain the following fields: Service type (can be multiple), time, date, email, phone number, and photos of yard(optional)
  // The form will be split into multiple components, each component will be a question

  const [formQuestion, setFormQuestion] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
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

  return (
    <>
      <AppointmentForm
        formQuestion="What services are you looking for?"
        submitHandler={testSubmitHandler}
        servicesQuestion="What services are you looking for?"
      />
      <div className="bg-image-2"></div>
    </>
  );
};

export default MakeAppointment;
