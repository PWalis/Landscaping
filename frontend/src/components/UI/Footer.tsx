import {type FC} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const Footer: FC = () => {
    return (

        <footer className="bg-gray-900 text-gray-300 py-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl font-sans2"> Isai's Landscaping | (623) 666-2727 </h1>
                <p> isaislandscaping@gmail.com </p>
                <p> Phoenix, AZ </p></div>
            <div className="container mx-auto flex flex-col my-10 sm:my-0 sm:flex-row items-center justify-between">
                <ul className="flex gap-5 font-sans2">
                    <li><Link to="/" className="hover:text-white">Home</Link></li>
                    <li><Link to="/makeAppointment" className="hover:text-white">Schedule Appointment</Link></li>
                    <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                </ul>
                <p className="text-sm">&copy; 2024 Isai's Landscaping. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;