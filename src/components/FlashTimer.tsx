import React from 'react'

export default function FlashTimer() {
  return (
    <div>
       {/* Timer fllash sale */}
       <div className="w-[302px] h-[50px] mt-[226px]  flex flex-row relative">
            <div className="w-[46px] h-[50px] gap-[4px] flex flex-col items-start p-0 absolute mr-[884.77%]">
              <div className="w-[31px] h-[18px] font-medium text-xs leading-[18px]">Days</div>
              <div className="w-[46px] h-[28px] font-bold text-[32px] leading-[30px] tracking-wide">
                03
              </div>
            </div>
            {/* dots */}
            <div className="w-[4px] h-[16px] gap-[8px]  ml-[63px] mt-[26px]  flex flex-col items-start p-0 absolute">
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
            </div>

            <div className="w-[42px] h-[50px] gap-[4px] ml-[27.81%] flex flex-col items-startp-0 absolute mr-[58.28%]">
              <div className="w-[35px] h-[18px] font-medium text-xs leading-[18px]">
                Hours
              </div>
              <div className="w-[43px] h-[30px] font-bold text-[32px] leading-[30px] tracking-wide">
                23
              </div>
            </div>
            {/* dots */}
            <div className="w-[4px] h-[16px] ml-[143px] mt-[26px] gap-[8px] flex flex-col items-start p-0 absolute">
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full border-2"></div>
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
            </div>

            <div className="w-[49px] h-[50px] gap-[4px] ml-[54.3%] flex flex-col items-startp-0 absolute mr-[29.47%]">
              <div className="w-[49px] h-[18px] font-medium text-xs leading-[18px]">
                Minutes
              </div>
              <div className="w-[39px] h-[28px] font-bold text-[32px] leading-[30px] tracking-wide">
                19
              </div>
            </div>
            {/* dots */}
            <div className="w-[4px] h-[16px] ml-[230px] mt-[26px] gap-[8px] flex flex-col items-start absolute p-0">
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
              <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
            </div>
            <div className="w-[51px] h-[50px] gap-[4px] ml-[83.11%] flex flex-col items-startp-0 absolute mr-[0%]">
              <div className="w-[52px] h-[18px] font-medium text-xs leading-[18px]">
                Seconds
              </div>
              <div className="w-[44px] h-[30px] font-bold text-[32px] leading-[30px] tracking-wide">
                56
              </div>
            </div>
          </div>
    </div>
  )
}
