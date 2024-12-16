import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";



export default function SideBar() {
  return (
    <div className='felx flex-col items-start p-0 gap-4 absolute w-[217px] h-[344px] ml-[135px] mt-[182px] border-2 border-slate-700 '>
      <div className='w-[217px] h-[24px] gap-[51px] flex flex-row items-start p-0  '>
       <div className='w-[142px] h-[22px] font-normal text-[16px] leading-7 text-center '>Woman's Fashion</div>
       <div className='w-[24px] h-[24px] -rotate-90 text-2xl mt-[5.27px] ml-[8px] cursor-pointer'><RiArrowDropDownLine/></div>
      </div>
      <div className='w-[217px] h-[24px] gap-[81px] flex flex-row items-start p-0'>
          <div className='w-[112px] h-[24px] leading-7 font-normal text-[16px] text-center'> Men's Fashion</div>
          <div className='w-[24px] h-[24px] -rotate-90 text-2xl mt-[5.27px] ml-[8px] cursor-pointer'><RiArrowDropDownLine/></div>
      </div>
      <div className='w-[87px] h-[24px] leading-7 font-normal text-[16px] text-center'>Electronics</div>
      <div className='w-[132px] h-[24px] leading-7 font-normal text-[16px] text-center'>Home & Lifestyle</div>
      <div className='w-[73px] h-[24px] leading-7 font-normal text-[16px] text-center'>Medicine</div>
      <div className='w-[137px] h-[24px] leading-7 font-normal text-[16px] text-center'>Sports & Outdoor</div>
      <div className='w-[109px] h-[24px] leading-7 font-normal text-[16px] text-center'>Baby's & Toys</div>
      <div className='w-[131px] h-[24px] leading-7 font-normal text-[16px] text-center'>Groceries & Pets</div>
      <div className='w-[128px] h-[24px] leading-7 font-normal text-[16px] text-center'>Health & Beauty</div>
      {/* <div className='w-[384px] h-[0px] mt-[142px] ml-[368px] border-[0.5px] rotate-90 absolute border-black'> 
      </div> */}
    </div>
  )
}
