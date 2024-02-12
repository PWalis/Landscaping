import {type FC,useState} from "react";
import {motion} from "framer-motion";

interface ServicesButtonsProps {
    title: string;
    updateState: ((prevServices: any) => any);
}

const ServicesButtons: FC<ServicesButtonsProps> = ({ title, updateState }) => {
    // Initialize with "bg-transparent" to match the initial state check
    const [buttonColor, setButtonColor] = useState("bg-transparent");

    // toggle handles highlight when button is clicked/unclicked
    const handleClick = () => {
        // Toggle between "bg-green-600/20" and "bg-transparent" on click
        setButtonColor((prevColor) =>
            prevColor === "bg-green-600/20" ? "bg-transparent" : "bg-green-600/20"
        );
        updateState((prevServices: any) => {
            // If the service is already in the array, remove it
            if (prevServices.includes(title)) {
                return prevServices.filter((service: string) => service !== title);
            }
            // If the service is not in the array, add it
            return [...prevServices, title];
        });
    };

    return (
        <motion.button
            className={`font-sans2 border-2 text-2xl uppercase font-bold p-14 border-white rounded-3xl text-white ${buttonColor}`}
            onClick={handleClick}
            type="button"
            whileHover={{scale: 1.1}}
        >
            {title}
        </motion.button>
    );
};

export default ServicesButtons;