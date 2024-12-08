import React from 'react'
import Image from "next/image"
const SideMenu = () => {
  return (
    <div>
     <div className='w-[360px] h-[1600px] p-20'>
      <div className="w-[176px] h-[392px]">
        <div className='h-[24px] flex flex-col gap-[32px]'>
        <h1 className='text-[#90A3BF] text-[20px] leading-[15.12px] tracking-[-2%] font-[600]'>Type</h1>
        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check" 
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
            <p className='text-black'>Sport</p>
            <span className='text-[#90A3BF]'>(10)</span>
        </div>


        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>SUV</p>
            <span className='text-[#90A3BF]'>(12)</span>
        </div>


        <div className='flex items-center gap-4 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>MPV</p>
            <span className='text-[#90A3BF]'>(16)</span>
        </div>


        <div className='flex items-center gap-4 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>Sedan</p>
            <span className='text-[#90A3BF]'>(20)</span>
        </div>




        <div className='flex items-center gap-5 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>Coup</p>
            <span className='text-[#90A3BF]'>(14)</span>
        </div>



        <div className='flex items-center gap-5 text-[16px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black '>Hatchback</p>
            <span className='text-[#90A3BF]'>(14)</span>
        </div>





        </div> 

        







        </div>

        
               {/* capacity */}


        <div className='h-[24px] flex flex-col gap-[32px] mt-16'>
          <h1 className='text-[#90A3BF] text-[20px] leading-[15.12px] tracking-[-2%] font-[600]'>Capacity</h1>
        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check" 
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
            <p className='text-black'>2 Persons</p>
            <span className='text-[#90A3BF]'>(10)</span>
        </div>


        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>4 Persons</p>
            <span className='text-[#90A3BF]'>(14)</span>
        </div>


        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>6 Persons</p>
            <span className='text-[#90A3BF]'>(12)</span>
        </div>


        <div className='flex items-center gap-3 text-[20px] height-[30px] leading-[30px] tracking-[-2%]'>
        <input
  type="checkbox"
  name="check"
  id="check"
  className="w-[24px] h-[24px] rounded-xl border-gray-300 border focus:ring-2 focus:ring-blue-500"
/>
           
            <p className='text-black'>8 or More</p>
            <span className='text-[#90A3BF]'>(16)</span>
        </div>



        <div className='h-[24px] flex flex-col gap-[32px] mt-10'>
        <h1 className='text-[#90A3BF] text-[16px] leading-[15.12px] tracking-[-2%] font-[600]'>Price</h1>
        <Image
        src="/Assets/range.png"
        alt="Profile"
        width={296}
        height={20}
       
      />

      <p className='text-[#90A3BF] text-[20px] leading-[15.12px] tracking-[-2%] font-[600]'>Max. $100.00</p>




        </div>
       





        </div> 
        </div>

        
        </div>

  )
}

export default SideMenu
