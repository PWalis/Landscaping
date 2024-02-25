import {type FC} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const Footer: FC = () => {
    return (

        <footer className="bg-gray-900 text-gray-300 py-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl font-sans2"> Isai's Landscaping | (602) 500-5555 </h1>
                <p> isaislandscaping@gmail.com </p>
                <p> Phoenix, AZ </p></div>
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">&copy; 2024 Isia's Landscaping. All rights reserved.</p>
                <ul className="flex gap-5 font-sans2">
                    <li><Link to="/" className="hover:text-white">Home</Link></li>
                    <li><Link to="/makeAppointment" className="hover:text-white">Schedule Appointment</Link></li>
                    <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                </ul>
            </div>
        </footer>
    );
};


export default Footer;