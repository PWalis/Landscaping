import {type FC} from "react";
import HomePageImage from "../../../assets/home-page-image.jpg";
import {Link} from "react-router-dom";


const Main: FC = () => {
    return (
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
                </div>
            </section>
        </main>
    );
};

export default Main;