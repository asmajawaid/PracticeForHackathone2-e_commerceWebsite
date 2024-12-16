 
import Buttons from "@/components/Buttons";
import FlashSalesCard from "@/components/FlashSalesCard";
import FlashTimer from "@/components/FlashTimer";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FlashSales() {
  return (
    <>
    <div className="flex flex-col items-center p-0 gap-10 absolute w-[1308px] h-[493px] mt-[666px] ml-[135px] ">
      <div className="w-[1170px] h-[103px] gap-[470px] flex flex-row items-end p-0">
        <div className=" w-[600px] h-[103px] gap-[87px] flex flex-row items-end p-0 ">
          <div className="w-[211px] h-[103px] gap-[24px] flex flex-col items-start p-0">
            <div className="w-[100px] h-[40px] gap-[16px] flex flex-row items-center p-0">
              <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></div>
              <div className="w-[64px] h-[20px] font-semibold text-[16px] leading-5 text-[#DB4444]">
                Today's
              </div>
            </div>
            <div className="w-[211px] h-[48px] font-semibold text-4xl tracking-wide">
              Flash Sales
            </div>
          </div>
          <FlashTimer/>
        </div>
        <div className="w-[100px] h-[46px] gap-2 flex flex-row items-start p-0">
        <div className="w-[46px] h-[46px]"><FaArrowLeft /></div>
        <div className="w-[46px] h-[46px]"><FaArrowRight /> </div>
        </div>
      </div>
      
      {/* cards */}
      <FlashSalesCard />
  
    </div>
    <div><Buttons/></div>
    </>
  );
}
