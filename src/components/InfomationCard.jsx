import React from "react";
import ProductCard from "./ProductCard";
import AeroPencil from "../assets/aeropencil.png";
import CastellPencil from "../assets/castellpencil.png";
import Pencil from "../assets/pencil.png";

const InfomationCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-[70px_73px_117px_300px_140px] md:grid-cols-[350px_minmax(762px,1fr)] md:gap-x-[38px]">
      <div className="col-span-2 ml-[31px] md:col-start-1 md:col-end-2 md:row-span-2 md:mt-[51px] md:w-[350px] md:h-[100px] md:ml-[42px]">
        <p className="md:text-black-1 md:font-[400] md:text-[21px] md:leading-[32px] md:font-Poppins">
          Graphite Artist Quality Fine Art Drawing, Sketching and Replaceable
          Nib Pencils.
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-around gap-x-[20px] ml-[20px] md:row-start-3 md:row-end-4 md:col-span-1 md:flex md:flex-col md:w-[222px] md:h-[160px] md:mt-[20px] md:ml-[49px] ">
        <div>
          <ul className="list-disc font-[600] leading-[40px] text-[13px] md:text-[18px]">
            <li>MECHANICAL PENCILS</li>
            <li>ARCHITECT'S CHOICE</li>
          </ul>
        </div>
        <div className="col-start-2 col-end-3">
          <ul className="list-disc font-[600] leading-[40px] text-[13px] md:text-[18px]">
            <li>EXECUTIVE PENCILS</li>
            <li>ENGRAVABLE PENCILS</li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 h-[90px] flex justify-center items-center border-2 rounded-[10px] border-background-primary m-[27px_30px] gap-x-[16px] md:col-start-2 md:col-end-3 md:m-[27px_0] md:w-full  md:relative">
        <div className="m-[19px_0_17px_24px] md:basis-1/4   md:w-full md:h-full md:flex md:justify-center md:items-center">
          <p className="text-yellow-primary text-[36px] font-[700]">
            25%<span className="text-[18px] absolute mt-[5px]">OFF</span>
          </p>
        </div>
        <div className="ml-[36px] md:basis-2/4">
          <p className="text-[16px] font-[400] leading-[24px] md:text-[25px] md:font-[300]">
            Offer Applicable on All Our Pencils
          </p>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-[minmax(165px,1fr)_minmax(165px,1fr)_minmax(165px,1fr)] gap-x-[18px] m-[40px_0_40px_20px] md:row-start-3 md:row-end-5 md:m-0 ">
        <ProductCard
          image={AeroPencil}
          firstName="Aero"
          name=" Mechanical Pencil"
          curPrice="$99.00"
          prevPrice="$125.00"
        />
        <ProductCard
          image={CastellPencil}
          firstName="Castell"
          name=" Mechanical Pencil"
          curPrice="$75.00"
          prevPrice="$99.00"
        />
        <ProductCard
          image={Pencil}
          firstName="Architect"
          name=" Choice Pencil"
          curPrice="$45.00"
          prevPrice="$70.00"
        />
      </div>
      <div className="col-span-2 flex justify-center items-center md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5 md:justify-start md:ml-[50px] md:mb-[84px]">
        <button className=" bg-yellow-primary w-[100px] h-[40px] rounded-[5px]">
          <p className="text-[14px] font-[700] text-background-primary">
            SHOP ALL
          </p>
        </button>
      </div>
    </div>
  );
};

export default InfomationCard;
