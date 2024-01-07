import { type FC } from "react";
import { Link } from "react-router-dom";


const Footer: FC = () =>  {
    return (

        <footer className="bg-gray-900 text-gray-300 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">&copy; 2024 Isia's Landscaping. All rights reserved.</p>
                <ul className="flex space-x-4">
                    <li><Link to="/services" className="hover:text-white">About</Link></li>
                    <li><a href="#" className="hover:text-white">Services</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};


export default Footer;