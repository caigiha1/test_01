import React from "react";
import Dot from "./Dot";

const ProductCard = ({ image, firstName, name, curPrice, prevPrice }) => {
  return (
    <div className="last:hidden last:lg:inline w-[165px] h-[260px] md:w-[224px] md:h-[320px] bg-background-primary rounded-[18px] flex flex-wrap items-center justify-center md:flex-col md:justify-center md:text-center md:content-center">
      <div>
        <img
          src={image}
          alt="name"
          className="w-[135px] h-[160px] m-[8.13px_13.3px_2px_16.7px] md:w-[180px] md:h-[210px] md:m-[10px_22px_14px_22px] "
        />
      </div>

      <div className="flex flex-col justify-center items-center font-[500] text-[13px] md:text-[14px] font-Poppins text-black-1 md:inline-block">
        <span>{firstName}</span>
        <span>{name}</span>
      </div>

      <div className="mx-auto mb-[26.13px] flex gap-[9.39px] md:flex md:justify-center md:mt-[9px] ">
        <span className="font-[600] text-[14px] md:text-[16px] text-black-1">
          {curPrice}
        </span>
        <del className="font-[400] text-[13px] md:text-[14px] text-[#727272]">
          {prevPrice}
        </del>
      </div>
    </div>
  );
};

export default ProductCard;
