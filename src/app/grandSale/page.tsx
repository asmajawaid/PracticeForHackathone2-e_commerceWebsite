import Image from "next/image";
import React from "react";

export default function GrandSale() {
  return (
    <>
      <div className="bg-black absolute w-[1170px] h-[500px] gap-[60px] ml-[135px] mt-[2526px] flex flex-row">
        <div className="flex flex-row">
          <div className="text-[#00FF66] absolute w-[90px] h-[20px] mt-[69px] ml-[56px] font-semibold text-[16px] leading-5">
            Categories
          </div>
          <h1 className="absolute w-[443px] h-[120px] mt-[121px] ml-[56px] font-semibold text-[48px] leading-[60px] text-white">
            Enhance Your <br /> Music Experience
          </h1>
          <div className=" bg-white absolute w-[320px] h-[62px] mt-[273px] ml-[56px] flex flex-row items-start p-0 gap-6">
            {" "}
            Timer
          </div>

          <div className="bg-[#00FF66] absolute w-[171px] h-[56px] gap-[10px] ml-[56px] mt-[376px] rounded-sm flex flex-row justify-center items-center py-[16px] px-[48px]">
            <button className="w-[75px] h-[24px] font-medium text-[16px] leading-6 text-white">
              Buy Now!
            </button>
          </div>
        </div>

        <div>
          <div className="absolute w-[600px] h-[420px] mt-[37px] ml-[526px]">
            <div className="bg-[#D9D9D9] absolute w-[504px] h-[500px] mt-[0px] ml-[552px] opacity-30 blur-[100px]">
              <Image
                src="/images/music.png"
                alt="speaker"
                width={450}
                height={450}
                className="w-[568px] h-[330px] mt-[45px] ml-[584px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
