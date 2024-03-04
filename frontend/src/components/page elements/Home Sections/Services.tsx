import React, { type RefObject } from "react";
import ServicePageImage from "../../../assets/services-image.jpg";
import GardeningShearsImage from "../../../assets/gardening-shears.icon.png";
import MaintenanceImage from "../../../assets/maintenance-icon.png";
import IrrigationImage from "../../../assets/irrigation-icon.png";

interface ServicesProps {
  ref: RefObject<HTMLDivElement>;
}

const Services = React.forwardRef<HTMLDivElement, ServicesProps>(
  (_props, ref) => {
    return (
      <section
        id="services"
        className="bg-stone-300/50 flex flex-col items-center pb-20"
      >
        <div className="mt-20" ref={ref}>
          <div className="flex flex-row items-center justify-center max-w-[1280px]">
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none">
              <h1 className="font-bold text-5xl text-green-700/60 mr-8 lg:col-span-2 lg:self-end">
                Let's keep your home looking fresh
              </h1>
              <div className="row-span-2">
                <img
                  src={ServicePageImage}
                  alt="Landscaping Services Image"
                  className=" max-h-72 m-auto object-cover rounded-lg shadow-lg "
                />
              </div>
              <p className="text-xl text-zinc-500 max-w-xl pt-3 lg:col-start-1 lg:col-span-2 sm:">
                "A well-maintained yard not only looks great, but it also
                creates a welcoming environment for you and your family. Our
                yard clean-up services are designed to help you achieve just
                that. From leaf removal to debris cleanup, we'll leave your yard
                looking neat and tidy."{" "}
              </p>
            </div>
          </div>
          <div className="text-center pt-14 pb-10">
            <h1 className="text-3xl text-green-900/60 italic">
              {" "}
              The Services Our Customers Love:{" "}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-10 ">
            <div className="flex flex-col items-center max-w-[475px]">
              <img
                className="w-20 h-auto"
                src={GardeningShearsImage}
                alt="Gardening Shears for Landscaping"
              />
              <div className="bg-green-300/20 p-4">
                <h2 className="text-4xl font-bold text-zinc-600 pb-3">
                  Landscaping
                </h2>
                <p className="text-zinc-500">
                  {" "}
                  Keep your trees healthy and looking great with our
                  professional tree trimming services. We'll remove dead or
                  overgrown branches, shape your trees for optimal growth, and
                  help keep your yard safe from falling limbs.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-[410px]">
              <img
                className="w-20 h-auto"
                src={IrrigationImage}
                alt="Irrigation for Landscaping"
              />
              <div className="bg-green-300/30 p-4 mb-4">
                <h2 className="text-4xl font-bold  text-zinc-600 pb-3">
                  Irrigation
                </h2>
                <p className="text-zinc-500">
                  Don't let dry weather ruin your lawn. Our irrigation services
                  can help keep your grass and plants healthy and hydrated all
                  season long. From installation to repairs, we've got you
                  covered.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-[401px]">
              <img
                className="w-20 h-auto"
                src={MaintenanceImage}
                alt="Maintenance for Landscaping"
              />
              <div className="bg-green-300/40 p-4 mb-4">
                <h2 className="text-4xl font-bold text-zinc-600 pb-3">
                  Maintenance
                </h2>
                <p className="text-zinc-500">
                  Is your yard in need of a little TLC? Our yard clean-up
                  services can help get things back in shape. We'll remove
                  debris, trim overgrown shrubs, and make sure your yard looks
                  its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Services;
