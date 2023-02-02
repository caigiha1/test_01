import React from "react";

const InfomationCard = () => {
  return (
    <div>
      <div className="">
        <div className="sm:p-[11px_37px_9px_31px]">
          <h1 className="sm:font-[400] sm:text-[16px] text-black-1">
            Graphite Artist Quality Fine Art Drawing, Sketching and Replaceable
            Nib Pencils.
          </h1>
        </div>
        <div className="">
          <ul className="list-disc pl-[19px] font-[600] leading-[40px] sm:flex sm:justify-between sm:text-[13px] sm:m-[0_28px_27px_20px]">
            <div>
              <li>MECHANICAL PENCILS</li>
              <li>ARCHITECT'S CHOICE</li>
            </div>
            <div>
              <li>EXECUTIVE PENCILS</li>
              <li>ENGRAVABLE PENCILS</li>
            </div>
          </ul>
        </div>
        <div
          className="sm:m-[0_30px_40px_30px] border-4 border-background-primary 
        sm:h-[90px] sm:w-[328px] rounded-[10px]
        "
        >
          <div>
            <p>
              25% <span>OFF</span>
            </p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className="">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default InfomationCard;
