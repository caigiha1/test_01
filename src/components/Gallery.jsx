import React from "react";
import galerry1 from "../assets/Rectangle21.png";
import galerry2 from "../assets/Rectangle23.png";
import galerry3 from "../assets/Rectangle24.png";
import galerry4 from "../assets/Rectangle25.png";
import galerry5 from "../assets/Rectangle26.png";
import galerry6 from "../assets/Rectangle27.png";
import galerry7 from "../assets/Rectangle28.png";
import Dot from "./Dot";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-center mb-[33.93px] font-[700] text-[30px]">
        PACKER PEN GALLERY
      </h1>
      <div className="grid grid-cols-2 grid-rows-[128px_minmax(1fr,152px)_289px_298px_minmax(0,131px)] gap-y-[10px] gap-x-[10px] overflow-hidden md:grid-cols-[291px_minmax(582px,_1fr)_291px]">
        <div className="row-start-1 row-end-3 md:mt-[40px] ">
          <img src={galerry2} alt="galerry2" className="w-full h-auto" />
          <img
            src={galerry4}
            alt="galerry4"
            className="md:h-[308.64px] h-[152px] w-full object-cover rounded-[10px] mt-[10px] "
          />
        </div>
        <div className="row-span-2 md:row-start-1 md:row-end-2">
          <img
            src={galerry1}
            alt="galerry1"
            className="h-full w-full object-cover rounded-[10px]"
          />
        </div>
        <div className="row-start-3 row-end-4 col-span-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-2">
          <img
            src={galerry3}
            alt="galerry3"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-2 md:col-start-3 md:col-end-4 md:mt-[89px]">
          <img
            src={galerry5}
            alt="galerry5"
            className="w-full h-auto object-cover md:hidden"
          />
        </div>
        <div className="row-start-5 row-end-6 col-start-1 col-end-2 flex gap-x-[10px] md:flex-col md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:gap-y-[10px] md:mt-[40px]">
          <img
            src={galerry5}
            alt="galerry5"
            className="w-full h-auto object-cover md:block md:rounded-[12px]"
          />
          <img
            src={galerry6}
            alt="galerry6"
            className="w-full h-auto object-cover"
          />
          <img
            src={galerry7}
            alt="galerry7"
            className="w-full h-auto object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
