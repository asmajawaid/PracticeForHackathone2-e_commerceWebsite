import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CiMobile4 , CiDesktop, CiCamera, CiHeadphones  } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceGamepad } from "react-icons/tb";



export default function Categories() {
  return (
    <>
     <div className='absolute w-[1170px] h-[313px] gap-[60px] mt-[1415px] ml-[135px] flex flex-col items-start p-0'>
     <div className="w-[1170px] h-[108px] gap-[691px] flex flex-row items-end p-0">
        <div className=" w-[379px] h-[108px] gap-[20px] flex flex-col items-start p-0 ">
            <div className="w-[126px] h-[40px] gap-[16px] flex flex-row items-center p-0">
              <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></div>
              <div className="w-[90px] h-[20px] font-semibold text-[16px] leading-5 text-[#DB4444]">
              Categories
              </div>
            </div>
            <div className="w-[379px] h-[48px] font-semibold text-4xl tracking-wide ">
            Browse By Category
            </div>
          
        </div>
        <div className="w-[100px] h-[46px] gap-2 flex flex-row items-start p-0">
        <div className="w-[46px] h-[46px]"><FaArrowLeft /></div>
        <div className="w-[46px] h-[46px]"><FaArrowRight /> </div>
        </div>
      </div>
      <div className="w-[1170px] h-[145px] gap-[30px] flex flex-row items-start p-0">
        {/* ICONS 1*/}
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            < CiMobile4 className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px]'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>
          {/* ICONS 2*/}
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            <CiDesktop className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px]'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>

        {/* ICONS 3*/}
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            <IoWatchOutline className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px] opacity-80'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>

         {/* ICONS 4*/}
         <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            <CiCamera className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px] opacity-80'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>

         {/* ICONS 5*/}
         <div className='hover:bg-[#DB4444]  hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            <CiHeadphones className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px] opacity-80'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>

        {/* ICONS 6*/}
        <div className='hover:bg-[#DB4444]  hover:text-white w-[170px] h-[145px] rounded-sm border-[1px] border-[#0000004D]'>
          <div >
            <TbDeviceGamepad className='absolute w-[56px] h-[56px] mt-[25px] ml-[57px] opacity-70'/>
          </div>
          <div className='absolute w-[59px] h-[24px] mt-[97px] ml-[55px] font-normal text-[16px] leading-6'>Phones</div>
        </div>
        
      </div>
     </div>
    </>
  )
}
