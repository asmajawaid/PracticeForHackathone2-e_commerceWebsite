import React from "react";
import RatingStars from "./RatingStars";
import Image from "next/image";
import { LuEye } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

export default function FlashSalesCard() {
  return (
    <>
      <div className="flex flex-row items-start p-0 w-[1308px] h-[350px] gap-[30px] ">
        {/* cart with flat diacount 1 */}
        <div className="w-[270px] h-[350px] flex flex-col items-start p-0 gap-4">
          {/* image div */}
          <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            {/* image */}
            <div className="w-[190px] h-[180px] absolute mt-[35px] ml-[40px]">
              <div className="absolute">
                <Image
                  src="/images/flashsales1.png"
                  width={150}
                  height={150}
                  alt="GamePad"
                  className="w-[172px] h-[152px] mt-[14px] ml-[9px]"
                />
              </div>
            </div>
            {/* discount % */}
            <div className="bg-[#DB4444] w-[55px] h-[26px] absolute mt-[12px] ml-[12px] py-[4px] px-[12px] rounded-sm gap-[10px] flex flex-row justify-center items-center">
              <div className="w-[31px] h-[18px] font-normal text-xs leading-[18px] text-[#fafafa]">-40%</div>
            </div>

            {/* Cart With Flat Discount  */}
            <div className="w-[34px] h-[76px] mt-[12px] mr-[12px] ml-[224px] flex flex-col items-start p-0 gap-2 absolute">
              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <FaRegHeart className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>

              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <LuEye className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* discription div */}
          <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
            <span className="w-[201px] h-[24px] font-medium text-[16px] leading-6 text-black">
              HAVIT HV-G92 Gamepad
            </span>
            <div className="w-[85px] h-[24px] gap-[12px] flex flex-row items-start p-0">
              <div className="w-[36px] h-[24px] font-medium text-[16px] leading-6 text-[#DB4444]">
                $120
              </div>
              <div className="w-[37px] h-[24px] font-medium text-[16px] leading-6 text-black opacity-50 line-through ">
                $160
              </div>
            </div>
            <div className="w-[140px] h-[20px] gap-[8px] flex flex-row items-start p-0">
              <div className="w-[100px] h-[20px]  flex flex-row items-start p-0 ">
                <RatingStars />
              </div>
              <div className="w-[32px] h-[20px] font-semibold text-[14px] leading-[21px] text-black opacity-50">
                (88)
              </div>
            </div>
          </div>
           <div className="hover:bg-black w-[270px] h-[41px] absolute mt-[209px] ml-0 mr-0 mb-0 rounded-b-sm gap-[10px]">
            <div className="absolute w-[96px] h-[24px] ml-[90px] mt-[10px] text-white content-center">
              Add To Cart</div>
           </div>
        </div>

        {/* cart with flat diacount 2 */}
        <div className="w-[270px] h-[350px] flex flex-col items-start p-0 gap-4">
          {/* image div */}
          <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            {/* image */}
            <div className="w-[190px] h-[180px] absolute mt-[35px] ml-[40px]">
              <div className="absolute">
                <Image
                  src="/images/flashsales1.png"
                  width={150}
                  height={150}
                  alt="GamePad"
                  className="w-[172px] h-[152px] mt-[14px] ml-[9px]"
                />
              </div>
            </div>
            {/* discount % */}
            <div className="bg-[#DB4444] w-[55px] h-[26px] absolute mt-[12px] ml-[12px] py-[4px] px-[12px] rounded-sm gap-[10px] flex flex-row justify-center items-center">
              <div className="w-[31px] h-[18px] font-normal text-xs leading-[18px] text-[#fafafa]">-40%</div>
            </div>

            {/* Cart With Flat Discount  */}
            <div className="w-[34px] h-[76px] mt-[12px] mr-[12px] ml-[224px] flex flex-col items-start p-0 gap-2 absolute">
              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <FaRegHeart className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>

              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <LuEye className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* discription div */}
          <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
            <span className="w-[201px] h-[24px] font-medium text-[16px] leading-6 text-black">
              HAVIT HV-G92 Gamepad
            </span>
            <div className="w-[85px] h-[24px] gap-[12px] flex flex-row items-start p-0">
              <div className="w-[36px] h-[24px] font-medium text-[16px] leading-6 text-[#DB4444]">
                $120
              </div>
              <div className="w-[37px] h-[24px] font-medium text-[16px] leading-6 text-black opacity-50 line-through ">
                $160
              </div>
            </div>
            <div className="w-[140px] h-[20px] gap-[8px] flex flex-row items-start p-0">
              <div className="w-[100px] h-[20px]  flex flex-row items-start p-0 ">
                <RatingStars />
              </div>
              <div className="w-[32px] h-[20px] font-semibold text-[14px] leading-[21px] text-black opacity-50">
                (88)
              </div>
            </div>
          </div>
           <div className="hover:bg-black w-[270px] h-[41px] absolute mt-[209px] ml-0 mr-0 mb-0 rounded-b-sm gap-[10px]">
            <div className="absolute w-[96px] h-[24px] ml-[90px] mt-[10px] text-white content-center">
              Add To Cart</div>
           </div>
        </div>

        {/* cart with flat diacount 3*/}
        <div className="w-[270px] h-[350px] flex flex-col items-start p-0 gap-4">
          {/* image div */}
          <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            {/* image */}
            <div className="w-[190px] h-[180px] absolute mt-[35px] ml-[40px]">
              <div className="absolute">
                <Image
                  src="/images/flashsales1.png"
                  width={150}
                  height={150}
                  alt="GamePad"
                  className="w-[172px] h-[152px] mt-[14px] ml-[9px]"
                />
              </div>
            </div>
            {/* discount % */}
            <div className="bg-[#DB4444] w-[55px] h-[26px] absolute mt-[12px] ml-[12px] py-[4px] px-[12px] rounded-sm gap-[10px] flex flex-row justify-center items-center">
              <div className="w-[31px] h-[18px] font-normal text-xs leading-[18px] text-[#fafafa]">-40%</div>
            </div>

            {/* Cart With Flat Discount  */}
            <div className="w-[34px] h-[76px] mt-[12px] mr-[12px] ml-[224px] flex flex-col items-start p-0 gap-2 absolute">
              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <FaRegHeart className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>

              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <LuEye className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* discription div */}
          <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
            <span className="w-[201px] h-[24px] font-medium text-[16px] leading-6 text-black">
              HAVIT HV-G92 Gamepad
            </span>
            <div className="w-[85px] h-[24px] gap-[12px] flex flex-row items-start p-0">
              <div className="w-[36px] h-[24px] font-medium text-[16px] leading-6 text-[#DB4444]">
                $120
              </div>
              <div className="w-[37px] h-[24px] font-medium text-[16px] leading-6 text-black opacity-50 line-through ">
                $160
              </div>
            </div>
            <div className="w-[140px] h-[20px] gap-[8px] flex flex-row items-start p-0">
              <div className="w-[100px] h-[20px]  flex flex-row items-start p-0 ">
                <RatingStars />
              </div>
              <div className="w-[32px] h-[20px] font-semibold text-[14px] leading-[21px] text-black opacity-50">
                (88)
              </div>
            </div>
          </div>
           <div className="hover:bg-black w-[270px] h-[41px] absolute mt-[209px] ml-0 mr-0 mb-0 rounded-b-sm gap-[10px]">
            <div className="absolute w-[96px] h-[24px] ml-[90px] mt-[10px] text-white content-center">
              Add To Cart</div>
           </div>
        </div>

        {/* cart with flat diacount 4*/}
        <div className="w-[270px] h-[350px] flex flex-col items-start p-0 gap-4">
          {/* image div */}
          <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            {/* image */}
            <div className="w-[190px] h-[180px] absolute mt-[35px] ml-[40px]">
              <div className="absolute">
                <Image
                  src="/images/flashsales1.png"
                  width={150}
                  height={150}
                  alt="GamePad"
                  className="w-[172px] h-[152px] mt-[14px] ml-[9px]"
                />
              </div>
            </div>
            {/* discount % */}
            <div className="bg-[#DB4444] w-[55px] h-[26px] absolute mt-[12px] ml-[12px] py-[4px] px-[12px] rounded-sm gap-[10px] flex flex-row justify-center items-center">
              <div className="w-[31px] h-[18px] font-normal text-xs leading-[18px] text-[#fafafa]">-40%</div>
            </div>

            {/* Cart With Flat Discount  */}
            <div className="w-[34px] h-[76px] mt-[12px] mr-[12px] ml-[224px] flex flex-col items-start p-0 gap-2 absolute">
              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <FaRegHeart className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>

              <div className="w-[34px] h-[34px] rounded-full bg-white">
                <div className="mt-[5px] ml-[5px]">
                  <LuEye className="w-[24px] h-[24px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* discription div */}
          <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
            <span className="w-[201px] h-[24px] font-medium text-[16px] leading-6 text-black">
              HAVIT HV-G92 Gamepad
            </span>
            <div className="w-[85px] h-[24px] gap-[12px] flex flex-row items-start p-0">
              <div className="w-[36px] h-[24px] font-medium text-[16px] leading-6 text-[#DB4444]">
                $120
              </div>
              <div className="w-[37px] h-[24px] font-medium text-[16px] leading-6 text-black opacity-50 line-through ">
                $160
              </div>
            </div>
            <div className="w-[140px] h-[20px] gap-[8px] flex flex-row items-start p-0">
              <div className="w-[100px] h-[20px]  flex flex-row items-start p-0 ">
                <RatingStars />
              </div>
              <div className="w-[32px] h-[20px] font-semibold text-[14px] leading-[21px] text-black opacity-50">
                (88)
              </div>
            </div>
          </div>
           <div className="hover:bg-black w-[270px] h-[41px] absolute mt-[209px] ml-0 mr-0 mb-0 rounded-b-sm gap-[10px]">
            <div className="absolute w-[96px] h-[24px] ml-[90px] mt-[10px] text-white content-center">
              Add To Cart</div>
           </div>
        </div>


      </div>
    </>
  );
}
