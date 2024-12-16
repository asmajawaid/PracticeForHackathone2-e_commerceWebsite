import Link from 'next/link';
import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

export default function Icons() {
  return (
    <div className='w-[80px] h-[32px] gap-[16px] flex flex-row justify-center items-center p-0'>
    {/* <div className='flex flex-row justify-center items-center p-0 gap-4 w-[128px] h-[32px] '>
      <div className='w-[32px] h-[32px] '><CiUser /></div>
    </div> */}
    <div className=''><Link href="/wishlist" className='w-[32px] h-[32px] text-xl'><FaRegHeart /></Link></div>
    <div className=''><Link href="/" className='w-[32px] h-[32px] text-2xl '><IoCartOutline /></Link></div>
    </div>
  )
}
