import React from "react";

const CardItem = ({ icon, title, arrow }) => {
  return (
    <div className="flex items-center justify-between m-[10px] bg-background-primary rounded-[18px] h-[80px] md:shadow-card md:w-[235px] md:h-[140px]  md:m-[32px_31px_28px_34px] ">
      <div className="ml-[20px] flex items-center justify-center gap-[20px] md:flex-col md:flex-grow md:m-0 ">
        <div className="bg-background-secondary rounded-full border border-none w-[50px] h-[50px] flex items-center justify-center">
          <img src={icon} alt={title} className="h-[20px] w-[20px]" />
        </div>
        <p className="font-Poppins font-[700] text-[21px] text-black-2">
          {title}
        </p>
      </div>
      <div className="w-[19px] h-[11px] mr-[30px] md:hidden">
        <img src={arrow} />
      </div>
    </div>
  );
};

export default CardItem;
