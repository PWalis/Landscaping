import { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessMessage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <motion.div className="flex justify-center h-screen m-auto flex-col w-1/2 text-white" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h1 className="text-5xl text-gray-100 font-bold pb-5">
        Thank you for your submission!
      </h1>
      <p className="text-2xl text-gray-100 font-bold pb-5">
        We will be in touch with you shortly
      </p>
    </motion.div>
  );
};

export default SuccessMessage;
