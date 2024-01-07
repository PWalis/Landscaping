import {type FC} from "react";
import "../../../index.css";
import {Link} from "react-router-dom";


const Main: FC = () => {
    return (
<<<<<<< HEAD
        <main className="bg-cover bg-center h-screen flex items-end justify-start relative">
            <section className="m-5 relative z-10">
                <div className="flex justify-items-center flex-col">
                    <p className="text-white font-bold text-2xl bg-black bg-opacity-50 p-10 italic">
                        Your yard is your outdoor sanctuary,<br />
                        <span className="font-normal">we're here to help you make the most of it</span>
                    </p>
                    <Link
                        to="/contact"
                        className="bg-green-600 hover:bg-green-500 text-white font-bold font-sans2 uppercase py-6 px-4 flex items-center justify-center"
                    >
                        Schedule Your Appointment Today
                    </Link>
=======
        <main
            // The h-screen class is used to set the height of the main element (in this case, our bg picture) to 100% of the viewport height
            className="bg-cover bg-center h-screen flex items-end justify-start"
            style={{ backgroundImage: `url(${HomePageImage})` }}
        >
            <section>
                <div className="p-10 flex justify-items-center flex-col">
                    <p className={"text-white font-bold text-2xl bg-black bg-opacity-50 p-10 italic"}>
                        Your yard is your outdoor sanctuary,<br/>we're here to help you make the most of it
                    </p>
                    <Link to="/contact" className="bg-green-400 hover:bg-green-300 text-white font-bold py-6 px-4 flex items-center justify-center" >Schedule Your Appointment Today</Link>
>>>>>>> 16a50207ad4b40e137e263a549fbee06fad64f46
                </div>
            </section>
            <div className="bg-image"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h1 className="text-8xl font-bold">ISAI'S LANDSCAPING</h1>
            </div>
        </main>
    );
};

export default Main;