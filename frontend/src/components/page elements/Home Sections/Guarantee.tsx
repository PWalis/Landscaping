import {type FC} from "react";


const Guarantee: FC = () => {
    return (
        <section className="h-auto bg-stone-300/70 flex items-center justify-center" id="Guarantee">
          <div className="mt-20 mb-20 flex flex-row flex-wrap justify-center items-center gap-12">
            <div className="max-w-[400px]">
              <h1 className="text-green-700/90 font-bold text-5xl pb-6">Our Guarantee</h1>
              <p className="text-green-700/90 ">“ISAI'S LANDSCAPING is dedicated to exceeding our clients’ expectations through superior design, honest long term relationships,
                and a commitment to implementing superlative landscapes in a fun and easy manner.”</p>
            </div>
            <div className="max-w-[400px]">
            <h1 className="text-stone-700/90 font-bold text-5xl pb-6">Our Quality</h1>
              <p className="text-stone-700/90 text-justify">“ISAI'S LANDSCAPING is dedicated to exceeding our clients’ expectations through superior design, honest long term relationships,
                and a commitment to implementing superlative landscapes in a fun and easy manner.”</p>
            </div>
            <div className="max-w-[400px]">
            <h1 className="text-slate-700 font-bold text-5xl pb-6">Our Service</h1>
              <p className="text-slate-700/90 text-justify">“ISAI'S LANDSCAPING is dedicated to exceeding our clients’ expectations through superior design, honest long term relationships,
                and a commitment to implementing superlative landscapes in a fun and easy manner.”</p>
            </div>
          </div>
        </section>
      );

};

export default Guarantee;