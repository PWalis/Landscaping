import {FC, useState} from "react";

interface ServicesButtonsProps {
    title: string;
}

const ServicesButtons: FC<ServicesButtonsProps> = ({ title }) => {
    // Initialize with "bg-transparent" to match the initial state check
    const [buttonColor, setButtonColor] = useState("bg-transparent");

    // toggle handles highlight when button is clicked/unclicked
    const handleClick = () => {
        // Toggle between "bg-green-600/20" and "bg-transparent" on click
        setButtonColor((prevColor) =>
            prevColor === "bg-green-600/20" ? "bg-transparent" : "bg-green-600/20"
        );
    };

    return (
        <button
            className={`font-sans2 border-2 text-2xl uppercase font-bold p-14 border-white rounded-3xl text-white ${buttonColor}`}
            onClick={handleClick}
            type="button"
        >
            {title}
        </button>
    );
};

export default ServicesButtons;