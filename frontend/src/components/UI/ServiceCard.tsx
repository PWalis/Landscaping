import {type FC} from "react";

interface ServiceProps {
    img: string;
    title: string;
    text: string;
    alt: string;
    color: string;
}
const ServiceCard: FC<ServiceProps> = ({img , text, title, alt, color}) => {
    return (
        <div className="flex flex-col items-center max-w-[450px]">
          <img
            className="w-20 h-auto"
            src={img}
            alt={alt}
          />
          <div className={`p-4 ${color}`}>
            <h2 className="text-4xl font-bold text-zinc-600 pb-3">
              {title}
            </h2>
            <p className="text-zinc-500 font-semibold">
              {text}
            </p>
          </div>
        </div>
    );
};
export default ServiceCard;