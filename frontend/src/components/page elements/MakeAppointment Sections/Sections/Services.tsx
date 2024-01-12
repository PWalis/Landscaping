import ServicesButtons from "../UI/ServicesButtons.tsx";
import {FC, useState} from "react";

interface ServicesProps {
    serviceQuestion: string
}

const Services: FC<ServicesProps> = ({serviceQuestion}) => {
    const [showInput, setShowInput] = useState(false);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the default behavior of the button
        event.preventDefault();

        // Toggle the state to show/hide the input
        setShowInput((prevShowInput) => !prevShowInput);
    };


    return (
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold justify-center align-middle mb-10">
                    {serviceQuestion}
                </h1>
                {/* SERVICES BUTTONS LOCATED IN UI/ServicesButtons.tsx */}
                <div className="flex flex-row gap-3 justify-center">
                    <ServicesButtons title={'Landscaping'} />
                    <ServicesButtons title={'Irrigation'} />
                    <ServicesButtons title={'Maintenance'} />
                </div>

                {/* Button to toggle input visibility */}
                <button
                    className="text-green-500 underline cursor-pointer focus:outline-none p-3"
                    onClick={handleButtonClick}
                >
                    Need something else?
                </button>

                {/* Input Section */}
                {showInput && (
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Please enter details about your service needs"
                            className="text-zinc-500 w-[500px] h-10 focus:outline-none px-2 font-bold text-xl font-sans2"
                        />
                    </div>
                )}
            </div>
    );
};

export default Services;