import { type FC, useState } from "react";
import {
  setServices as setStoreServices,
  setAdditionalService,
  setName,
  setEmail,
  setPhone,
} from "../../ReduxStore/AppointmentDataSlice.ts";
import { useDispatch } from "react-redux";
import Services from "../page elements/MakeAppointment Sections/Sections/Services";
import DateRange from "../page elements/MakeAppointment Sections/Sections/DateRange";
import TextInput from "../page elements/MakeAppointment Sections/Sections/TextInput.tsx";
import Photo from "../page elements/MakeAppointment Sections/Sections/Photo.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Store.ts";
import SuccessMessage from "../page elements/MakeAppointment Sections/SuccessMessage.tsx";
import { AnimatePresence } from "framer-motion";

const MakeAppointment: FC = () => {
  // This component will contain the logic for submitting the form data to the backend
  // The form will contain the following fields: Service type (can be multiple), time, date, email, phone number, and photos of yard(optional)
  // The form will be split into multiple components, each component will be a question
  const [services, setServices] = useState<string[]>([]);
  // const [additionalService, setAdditionalService] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const store = useSelector((state: RootState) => state.appointmentData);
  const form = new FormData();
  const dispatch = useDispatch();

  for (const value of form.values()) {
    console.log("values", value);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    console.log("submitted", (e.target as HTMLInputElement).value);
    // form.append(valueName[count], e.target.value);
  };

  const servicesHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Dispatch the services to the Redux store
    dispatch(setStoreServices(services));
    setCount((prevCount) => prevCount + 1);
    console.log("submitted", (event.target as HTMLInputElement).value);
  };

  const dateHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Dispatch the date to the Redux store
    // dispatch(setAdditionalService());
    setCount((prevCount) => prevCount + 1);
    console.log("submitted", (event.target as HTMLInputElement).value);
  };

  const appointmentFormSequence = [
    <Services
      serviceQuestion={"What services are you looking for?"}
      setServices={setServices}
      submitHandler={servicesHandleSubmit}
      key="services"
    />,
    <DateRange
      formQuestion={"What day works best for you?"}
      submitHandler={submitHandler}
      key={"date"}
    />,
    <TextInput
      formQuestion={"What is a good number to reach you at?"}
      submitHandler={submitHandler}
      storeReducerFunction={setPhone}
      storeValue={store.value.phone}
      key={"phone"}
    />,
    <TextInput
      formQuestion={"What is your email?"}
      submitHandler={submitHandler}
      storeReducerFunction={setEmail}
      storeValue={store.value.email}
      key={"email"}
    />,
    <TextInput
      formQuestion={"What is your name?"}
      submitHandler={submitHandler}
      storeReducerFunction={setName}
      storeValue={store.value.name}
      key={"name"}
    />,
    <Photo
      formQuestion={"If you have any photos of your yard please add them here"}
      submitHandler={submitHandler}
      key={"photo"}
    />,
  ];

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {appointmentFormSequence[count]}
        {count > appointmentFormSequence.length - 1 ? (
          <SuccessMessage key={"success"}></SuccessMessage>
        ) : null}
      </AnimatePresence>
      <div className="bg-image-2"></div>
    </>
  );
};

export default MakeAppointment;
