import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Icons from "./NavIcons";


export default function Header() {
  return (
    
      <div className="w-[1170px] h-[38px] flex flex-row mt-[88px] ml-[135px] gap-[148px] items-center p-0 absolute ">
        <div className="w-[675px] h-[24px] gap-[190px] flex flex-row items-start p-0 ">
        {/* left */}
        <h1 className="w-[118px] h-[24px] font-bold text-2xl p-0">Exclusive</h1>
        {/* medium */}
        <div className="w-[367px] h-[24px] gap-[48px] ">
        <ul className="hidden md:flex flex-row items-start p-0 justify-evenly ">
                <li className="hover:underline w-[48px] h-[24px] "><Link href="/">Home</Link></li>
                <li className="hover:underline w-[66px] h-[24px] "><Link href="/contact">Contact</Link></li>
                <li className="hover:underline w-[48px] h-[24px] "><Link href="/about">About</Link></li>
                <li className="hover:underline w-[61px] h-[24px] "><Link href="/signUp">SignUp</Link></li>
              </ul>
        </div>
        </div>
        {/* right */}
        <div className="flex w-[347px] h-[38px] gap-[24px] ">
       <SearchBar/>
       <Icons/>
       </div>
      </div>
    
  );
}
