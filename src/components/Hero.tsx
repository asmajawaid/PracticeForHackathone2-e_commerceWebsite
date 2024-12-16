import React from 'react'
import SideBar from './SideBar'
import Line4 from "./Line4"
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='flrex flex-row'>
    
      <SideBar/>

      <div className='w-[892px] h-[344px] mt-[182px] ml-[413px] absolute bg-black'>
      <div className='text-[#FAFAFA]'>
        {/* 1 DIV */}
        <div className='flex flex-row items-center w-[190px] h-[49px] mt-[58px] ml-[64px] gap-[24px] p-0 absolute'>
          <div className='w-[] h-[] mt-[] ml-[] gap-[]'>
            <Image src="/images/apple.png" width={40} height={49} alt='apple mobile' />
          </div>
          <div className='w-[126px] h-[20px] font-normal text-[16px] leading-6 items-center'>iPhone 14 Series</div>
        </div>
        {/* 2 DIV */}
        <div className='absolute w-[294px] h-[120px] mt-[127px] ml-[64px] font-semibold text-5xl leading-[64px] tracking-wider '>Up to 10% off Voucher</div>
        {/* 3 DIV */}
        <div className='flex flex-row items-center p-0  w-[113px] h-[28px] mt-[269px] ml-[67px] gap-2 absolute'>
          <div className='w-[81px] h-[28px] gap-1 flex flex-col items-start p-0 underline'>Shop Now</div>
          <div ><Link href="" className='w-[24px] h-[24px]'><FaArrowRight /></Link></div>
        </div>
        {/* radio buttons */}
       <div className='flex flex-row items-center p-0 gap-3 absolute w-[110px] h-[14px] ml-[353px] mt-[319px] border-blue-500'>
            <div className='w-[12px] h-[12px] bg-[#FFFFFF] rounded-full opacity-50'></div>
            <div className='w-[12px] h-[12px] bg-[#ffffff] rounded-full opacity-50'></div>
            <div className='w-[14px] h-[14px] bg-[#DB4444] rounded-full border-2'></div>
            <div className='w-[12px] h-[12px] bg-[#ffffff] rounded-full opacity-50'></div>
            <div className='w-[12px] h-[12px] bg-[#ffffff] rounded-full opacity-50'></div>
       </div>
      </div>

      {/* IMAGE DIV */}
      <div className='mt-[16px] ml-[396px]'>
        <Image src="/images/hero.jpg" width={496} height={352} alt='mobile' className='w-[496px] h-[300px]'/>
      </div>
    
      </div>
    </div>
  )
}
