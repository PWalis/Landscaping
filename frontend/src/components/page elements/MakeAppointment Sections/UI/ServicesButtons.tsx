import {FC, useState} from "react";

interface ServicesButtonsProps {
    title: string;
}
const ServicesButtons: FC<ServicesButtonsProps> = ({ title }) => {
    const [buttonColor, setButtonColor] = useState("transparent");

    // toggle handles highlight when button is clicked/unclicked
    const handleClick = () => {
        // Toggle between "green" and "transparent" on click
        setButtonColor((prevColor) => (prevColor === "green" ? "transparent" : "green"));
    };

return (
    <button
        className={`bg-transparent font-sans2 border-2 text-2xl uppercase font-bold p-14 border-white rounded-3xl 
                  ${buttonColor === "green" ? "bg-green-600/20 text-white" : "bg-transparent text-white"}`}
        onClick={handleClick}
    >
        {title}
    </button>

);

};
export default ServicesButtons;