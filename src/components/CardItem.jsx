import React from "react";

const CardItem = ({ icon, title, arrow }) => {
  return (
    <div className="flex items-center justify-between sm:m-[10px] bg-background-primary rounded-[18px] sm:h-[80px]">
      <div className="sm:ml-[20px] flex items-center justify-center gap-[20px]">
        <div className="bg-background-secondary rounded-full border border-none sm:w-[50px] sm:h-[50px]  flex items-center justify-center">
          <img src={icon} alt={title} className="sm:h-[20px] sm:w-[20px]" />
        </div>
        <p className="font-Poppins font-[700] text-[21px] text-black-2">
          {title}
        </p>
      </div>
      <div className="sm:w-[19px] sm:h-[11px] sm:mr-[30px]">
        <img src={arrow} />
      </div>
    </div>
  );
};

export default CardItem;
