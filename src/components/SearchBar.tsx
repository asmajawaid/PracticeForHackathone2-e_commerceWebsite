import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <div className="bg-[#F5F5F5] w-[243px] h-[38px] border rounded py-[7px] pr-[12px] pl-[20px] gap-[10px] flex flex-row justify-center items-center">
       {/* search component set */}
 
      <form action="" className=' w-[211px] h-[24px] gap-[34px] flex'>
        <input type="text" placeholder='What are you looking for?' className='flex-1 text-opacity-50 w-[153px] h-[18px]  font-[400px] text-xs text-black mb-1 bg-transparent outline-none' />
         {/* Search Icon */}
        <button className='cursor-pointer w-[24px] h-[24px] text-xl '>
        <FiSearch className=''/>
        </button>
        {/* </div> */}
      </form>
      </div>
  
  )
}
