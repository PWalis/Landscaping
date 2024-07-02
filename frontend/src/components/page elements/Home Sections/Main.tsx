import {type FC} from "react";
import "../../../index.css";
import {Link} from "react-router-dom";


const Main: FC = () => {
    return (
        <section id="home" className="bg-cover bg-center h-screen flex items-end justify-start relative">
            <div className="m-5 relative z-10">
                <div className="flex justify-items-center flex-col">
                    <p className="text-white font-bold text-2xl bg-black bg-opacity-60 backdrop-blur-lg p-6 md:p-10 italic">
                        Your yard is your outdoor sanctuary,<br />
                        <span className="font-normal">we're here to help you make the most of it</span>
                    </p>
                    <a
                        href="tel:6236662727"
                        className="bg-green-600 hover:bg-green-500 text-white transition duration-300 font-bold tracking-wider text-xl font-sans2 uppercase py-6 px-4 flex items-center justify-center"
                    >
                        Call now | (623) 666-2727
                    </a>
                </div>
            </div>
            <div className="bg-image"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h1 className="text-5xl md:text-8xl shrink font-bold mb-32">ISAI'S LANDSCAPING</h1>
            </div>
        </section>
    );
};

export default Main;