import {type FC} from "react";

interface TestimonialProps {
    img: string;
    text: string;
    author: string;
    area: string;
}
const TestimonialCard: FC<TestimonialProps> = ({img , text, author, area}) => {
    return (
        <div className="flex flex-col bg-stone-100/80 rounded-lg shadow-lg w-[300px] h-[600px] sm:w-[400px]">
            <img className="object-cover h-1/2 shadow-lg" src={img}
                 alt="Testimonial Image"/>
            <div className="m-4 text-green-900/50">
                <p className="text-xl"> {text} </p>
                <br/>
                <div className="mt-auto">
                    <p> - {author} </p>
                    <p> located in {area} </p>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;
