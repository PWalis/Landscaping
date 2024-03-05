import {type FC} from "react";
import TestimonialImage1 from "../../../assets/testimonials-image-1.jpg"
import TestimonialImage2 from "../../../assets/testimonials-image-2.jpg"
import TestimonialImage3 from "../../../assets/testimonials-image-3.jpg"
import TestimonialCard from "../../UI/TestimonialCard.tsx";


const Testimonials: FC = () => {
    return (
        <section className="h-auto bg-stone-300/90 flex items-center justify-center" id="testimonials">
            <div className="pl-64 pr-64 mt-20 mb-20">
                <h1 className="text-5xl italic font-bold text-zinc-900/55 mb-14"> Hear it from our customers: </h1>
                <div className="flex flex-row flex-wrap wrap gap-10 justify-center items-center">
                        <TestimonialCard img={TestimonialImage1} text={"Isai provided wonderful service tidying up and mantaining all the weeds in our yard. He does an amazing job keeping our old cactus alive!"} author={"Julia Write"} area={"Phoenix AZ"}></TestimonialCard>
                        <TestimonialCard img={TestimonialImage2} text={"Isai provided wonderful service tidying up and mantaining all the weeds in our yard. He does an amazing job keeping our old cactus alive!"} author={"Jessie Jackson"} area={"Phoenix AZ"}></TestimonialCard>
                        <TestimonialCard img={TestimonialImage3} text={"Isai provided wonderful service tidying up and mantaining all the weeds in our yard. He does an amazing job keeping our old cactus alive!"} author={"Anthony John"} area={"Tempe AZ"}></TestimonialCard>
                    </div>
            </div>
        </section>
    );

};

export default Testimonials;