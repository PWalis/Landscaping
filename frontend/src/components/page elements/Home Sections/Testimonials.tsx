import {type FC} from "react";
import TestimonialImage1 from "../../../assets/testimonials-image-1.jpg"
import TestimonialImage2 from "../../../assets/testimonials-image-2.jpg"
import TestimonialImage3 from "../../../assets/testimonials-image-3.jpg"

const Testimonials: FC = () => {
    return (
        <section className="h-auto bg-stone-300/90 flex items-center">
            <div className="pl-64 pr-64 mt-20 mb-20">
                <h1 className="text-5xl italic font-bold text-zinc-900/55 mb-14"> Hear it from our customers: </h1>
                <div className="flex flex-row gap-5 justify-center">
                    <div className="flex w-1/3">
                        <div className="flex flex-col bg-stone-100/80 max-h-[600px] rounded-lg shadow-lg">
                            <img className="object-cover h-1/2 w-full rounded-lg shadow-lg" src={TestimonialImage1}
                                 alt="Testimonial Image"/>
                            <div className="m-4 text-green-900/50">
                                <p className="text-xl">" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi
                                    "</p>
                                <br/>
                                <div className="mt-auto">
                                    <p> - Julia Write </p>
                                    <p> located in Phoenix AZ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3">
                        <div className="flex flex-col bg-stone-100/60 max-h-[600px] rounded-lg shadow-lg">
                            <img className="object-cover h-1/2 w-full rounded-lg shadow-lg" src={TestimonialImage2}
                                 alt="Testimonial Image"/>
                            <div className="m-4 text-green-900/60">
                                <p className="text-xl"> " Isai provided wonderful service tidying up and mantaining all the weeds in our yard. He does an amazing job keeping our old cactus alive! " </p>
                                <br/>
                                <div className="mt-auto">
                                    <p> - Jessie Jackson </p>
                                    <p> located in Buckeye AZ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3">
                        <div className="flex flex-col bg-stone-100/40 max-h-[600px] rounded-lg shadow-lg">
                            <img className="object-cover h-1/2 w-full rounded-lg shadow-lg" src={TestimonialImage3}
                                 alt="Testimonial Image"/>
                            <div className="m-4 text-green-900/50">
                            <p className="text-xl"> " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi.
                                Dignissim suspendisse in est ante in nibh mauris cursus mattis. " </p>
                            <br/>
                            <div className="mt-auto">
                                <p> - Anthony Mark </p>
                                <p> located in Tempe AZ </p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

};

export default Testimonials;