import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function TopHeader() {
  return (
    //  <div className="bg-blue-500 text-white justify-between items-center absolute w-full h-[48px] sm:w-[320px]  md:w-[768px] lg:w-[1152px] xl:w-[1440px] 2xl:w-[1920px] flex flex-row mt-0">
       <div className="bg-black max-w-full text-white sm:w-[576] md:w-full  lg:w-[1440px] xl:w-full h-[48px] flex flex-row mt-0 absolute  ">
        <div className="w-[859px]  h-[24px] gap-[25px] sm:gap-[50px] md:gap-[100px] lg:gap-[231px] mt-[12px] ml-[10px] sm:ml-[75px] md:ml-[150px] lg:ml-[225px] xl:[350px] 2xl:ml-[445px] flex p-0 ">
          {/* left div */}
          <div className="w-[550px] h-[24px] gap-[2px] lg:gap-[8px] flex flex-row items-center">
            <div className="w-[474px] h-[18px] text-[9px] lg:text-sm font-normal  ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="w-[68px] h-[24px] font-[600px] text-[9px] lg:text-sm underline items-center">Shop Now</div>
          </div>
          {/* right div */}
          <div className="w-[78px] h-[24px] text-white text-[9px] lg:text-sm flex flex-row justify-center gap-[5px] p-0">
            English <div className="text-[9px] lg:text-2xl"><RiArrowDropDownLine /></div>
          </div>
        </div>
      </div>
      // </div>
  
  );
}
