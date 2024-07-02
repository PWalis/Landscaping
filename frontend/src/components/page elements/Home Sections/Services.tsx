import React, { type RefObject } from "react";
import ServicePageImage from "../../../assets/services-image.jpg";
import GardeningShearsImage from "../../../assets/gardening-shears.icon.png";
import MaintenanceImage from "../../../assets/maintenance-icon.png";
import IrrigationImage from "../../../assets/irrigation-icon.png";
import ServiceCard from "../../UI/ServiceCard";

interface ServicesProps {
  ref: RefObject<HTMLDivElement>;
}

const Services = React.forwardRef<HTMLDivElement, ServicesProps>(
  (_props, ref) => {
    return (
      <section
        id="services"
        className="bg-stone-300/50 flex flex-col items-center"
      >
        <div className="mt-10 mb-10 xl:mt-20 xl:mb-20 pr-10 pl-10" ref={ref}>
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center row-span-2 max-w-[1280px] mx-auto">
            <div className="grid grid-rows-3 lg:grid-cols-1 xl:grid-cols-3 xl:grid-rows-none">
              <h2 className="font-bold text-center flex items-center xl:text-left text-4xl sm:text-5xl text-green-700/60  lg:col-span-2  xl:pb-3">
                We'll Make Your Yard Spotless
              </h2>
              <div className="row-span-2 justify-center flex items-center">
                <img
                  src={ServicePageImage}
                  alt="Landscaping Services Image"
                  className=" max-h-[300px] object-cover rounded-lg shadow-lg "
                />
              </div>
              <div className="text-lg xl:text-xl text-justify bg-green-500/10 text-zinc-800 rounded-md p-6 max-w-[450px] flex items-center lg:flex-col justify-center m-auto mt-4 xl:pt-1 xl:m-1 xl:max-w-2xl lg:col-start-1 lg:col-span-2">
                "A well-maintained yard not only looks great, but it also
                creates a welcoming environment for you and your family. Our
                yard clean-up services are designed to help you achieve just
                that. From leaf removal to debris cleanup, we'll leave your yard
                looking neat and tidy."{" "}
              </div>
            </div>
          </div>
          <div className="text-center pt-14 pb-10">
            <h1 className="text-3xl font-bold text-green-900/60 italic">
              {" "}
              The Services Our Customers Love:{" "}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-10 ">
            <ServiceCard
              img={MaintenanceImage}
              alt="Maintenance for Landscaping"
              title="Maintenance"
              color="bg-green-300/30"
              text="Refresh your yard and keep it looking great all year round. No matter how overgrown it is, we’ll make it spotless. Our team works quickly and efficiently. Get free weed control treatment when we clean your yard."
            />
            <ServiceCard
              img={GardeningShearsImage}
              alt="Gardening Shears for Landscaping"
              title="Trimming"
              color="bg-green-300/20"
              text="Keep your trees healthy and looking great with our
                  professional tree trimming services. We'll remove dead or
                  overgrown branches, shape your trees for optimal growth, and
                  help keep your yard safe from falling limbs."
            />
            <ServiceCard
              img={IrrigationImage}
              alt="Irrigation for Landscaping"
              title="Irrigation"
              color="bg-green-300/40"
              text="Don't let dry weather ruin your lawn. Our irrigation services
              can help keep your grass and plants healthy and hydrated all
              season long. From installation, repairs, and timers we've got you
              covered."
            />
          </div>
        </div>
      </section>
    );
  }
);

export default Services;
