import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";

const SuccessMessage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <div className="flex justify-center h-screen m-auto flex-col w-1/2 text-white">
      <h1 className="text-5xl text-gray-100 font-bold pb-5">
        Thank you for your submission!
      </h1>
      <p className="text-2xl text-gray-100 font-bold pb-5">
        We will be in touch with you shortly
      </p>
    </div>
  );
};

export default SuccessMessage;
