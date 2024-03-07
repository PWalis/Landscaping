import {type FC} from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Phone from "../../assets/phone.png"
import bgimage from "../../assets/sedona_1b.jpg"
import '../../index.css'

const Contact: FC = () => {
    return (
        <>
            <Header title="Isai's Landscaping | Contact" servicesYPosition={0} isScrolled={false}/>
            <div className="flex h-screen">
                <div className="m-auto p-10">
                    <div className="flex items-center gap-6 flex-col md:flex-row  z-10">
                        <div className="flex flex-col md:flex-row bg-stone-100 rounded-md items-center gap-6 p-10 z-20">
                        <img className="w-1/3 max-w-[175px] z-20" src={Phone} alt="" />
                    <div className="z-10">
                    <h1 className=" text-4xl text-green-800 font-sans2 text-center w-full "> Give Isia a call for a consultation</h1>
                    <h1 className="text-5xl text-zinc-900 pt-4 font-bold text-center font-sans2 w-full">(623)666-2727</h1>
                    </div>
                    </div>
                </div>
                <div className="bg-image-2 z-0"></div>
                </div>
            
            </div>
            <Footer/>
        </>
    );
};

export default Contact;