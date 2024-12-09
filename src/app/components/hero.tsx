import React from 'react'
import Image from "next/image"
import { IoIosArrowDown } from 'react-icons/io'
import { IoArrowDown, IoArrowUp, IoHeart } from 'react-icons/io5'
import Cards from './Cards'
import Links from "next/link"
import Link from 'next/link'


const data=[
  {
    id:1,
    tittle:"Koenigsegg",
     Usertext:2,
     newPrice:"$99.00",
     Number:9 ,
     image:"/Assets/car-01.png",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>
  },
  {
    id:2,
    tittle:"Nissan GT - R",
     Usertext:2,
     newPrice:"$80.00",
     Number:8,
     image:"/Assets/car-2.png",
     oldPrice:"$100.00",
  },
  {
    id:3,
    tittle:"Rolls - Royce",
     Usertext:4,
     newPrice:"$96.00",
     model:"Sedan",
     Number:7 ,
     image:"/Assets/car-1.png",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>
  },
  {
    id:4,
    tittle:"Nissan GT - R",
     Usertext:2,
     newPrice:"$80.00",
     oldPrice:"$100.00",
     Number:8 ,
     image:"/Assets/car-2.png",
  },
]



const data2=[
  {
    id:1,
    tittle:"All New Rush",
     Usertext:7,
     newPrice:"$72.00",
     model:"SUV",
     oldPrice:"$80.00",
     Number:6,
     image:"/Assets/car-123.png",
  },
  {
    id:2,
    tittle:"CR  - V",
    model:"SUV",
     Usertext:8,
     newPrice:"$80.00",
     Number:6,
     image:"/Assets/car-20.png",
     oldPrice:"$100.00",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>
  },
  {
    id:3,
    tittle:"All New Terios",
    model:"SUV",
     Usertext:6,
     newPrice:"$74.00",
     Number:9,
     image:"/Assets/car-21.png",
  },
  {
    id:4,
    tittle:"CR  - V",
     Usertext:6,
     model:"SUV",
     newPrice:"$80.00",
     oldPrice:"$80.00",
     Number:8 ,
     image:"/Assets/car-234.png",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>
  },
  {
    id:5,
    tittle:"MG ZX Exclusice",
     Usertext:4,
     newPrice:"$76.00",
     model:"Hatchback",
     oldPrice:"$80.00",
     Number:7,
     image:"/Assets/car-17.png",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>
  },
  {
    id:6,
    tittle:"New MG ZS",
    model:"SUV",
     Usertext:8,
     newPrice:"$80.00",
     Number:6,
     image:"/Assets/car-18.png",
  },
  {
    id:7,
    tittle:"MG ZX Excite",
    model:"Hatchback",
     Usertext:4,
     newPrice:"$74.00",
     Number:9,
     image:"/Assets/car-17.png",
     redHeart:<IoHeart  className='text-[#ED3F3F] text-3xl'/>

  },
  {
    id:8,
    tittle:"New MG ZS",
     Usertext:6,
     model:"SUV",
     newPrice:"$80.00",
     Number:8 ,
     image:"/Assets/car-19.png",
  },
]
const Hero = () => {
  return (

    <div className='w-[375px] h-auto xl:mt-[124px] bg-[#F6F7F9] xl:w-[1440px] xl:h-[2120px]'>
  <div className="mt-[172px] md:mt-[120px] ml-[25px] rounded-[10px] w-[327px] h-[232px] md:flex gap-10 lg:w-[640px] lg:h-[360px]  lg:mt-[32px] lg:ml-[64px] lg:rounded-[10px]">
   
    <Image
      src="/Assets/carFrame1.png"
      alt="Profile"
      width={640}
      height={360}
    />

    <Image
      src="/Assets/frame-02.png"
      alt="Profile"
      width={640}
      height={360}
      className="hidden md:flex" 
    />
  </div>
  
  <div className="flex flex-col md:mt-10  md:mx-40 lg:mx-40 xl:mx-auto xl:ml-16 lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:gap-0 mt-0 mx-auto lg:mt-10">
  {/* Pickup Card */}
  <div className=" md:w-[500px] w-[327px]  lg:mx-w-[600px] xl:mx-w-[582px] mx-auto lg:mr-10 bg-white rounded-[10px] shadow-xl 
  px-4 py-4">
    <div className="flex gap-3">
      <Image src="/Assets/mark.png" alt="mark" width={20} height={20} />
      <h3 className=" text-16px] lg:text-xl font-semibold text-gray-800">Pick-Up</h3>
    </div>

    <div className="mt-5 flex flex-row justify-between items-center">
      {/* Location */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px] tracking-[-2%]">Location</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-bold text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Vertical Line */}
      <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

      {/* Date */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Date</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-normal text-[#90A3BF]">Select your Date</p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Vertical Line */}
      <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

      {/* Time */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Time</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-normal text-[#90A3BF]">Select your Time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>

  {/* Arrow Button */}
  <div className="md:relative md:left-[200px]  lg:left-[150px] flex justify-center mt-0 lg:mt-10 ">
    <div className="flex bg-[#3563E9] w-[64px] h-[64px] z-[1000] lg:mx-w-[60px] lg:mx-h-[60px] hover:bg-[#2b4699] justify-center items-center rounded-xl">
      <IoArrowUp className="text-white text-3xl" />
      <IoArrowDown className="text-white text-3xl" />
    </div>
  </div>

  {/* Day-Off Card */}
  <div className=" md:w-[500px] lg:ml-[300px]  w-[327px]  xl:mx-w-[582px]  mx-auto lg:mr-10 bg-white rounded-[10px] shadow-xl 
  px-4 py-4">
    <div className="flex gap-3">
      <Image src="/Assets/mark.png" alt="mark" width={20} height={20} />
      <h3 className="text-[16px] lg:text-xl font-semibold text-gray-800">Day-Off</h3>
    </div>

    <div className="mt-5 flex flex-row justify-between items-center">
      {/* Location */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Location</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-bold text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Vertical Line */}
      <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

      {/* Date */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Date</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-normal text-[#90A3BF]">Select your Date</p>
          <IoIosArrowDown />
        </div>
      </div>

      {/* Vertical Line */}
      <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

      {/* Time */}
      <div className="flex-1">
        <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Time</h1>
        <div className="flex gap-2 items-center">
          <p className="text-[14px] font-normal text-[#90A3BF]">Select your Time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Popular Car Section */}
<div className=' mt-16 mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24 mx-w-[1312px] mx-h-[452px] text-[#90A3BF]'>
<ul className='flex justify-between text-[#90A3BF] lg:text-2xl'>
                             <li>Popular Car</li>
                             <li className='text-end'>View All</li>
                            
                          </ul>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[320px] xl:gap-6 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
    {data.map((elem) => (
      <Cards
        key={elem.id}
        image={elem.image}
        newPrice={elem.newPrice}
        tittle={elem.tittle}
        Usertext={elem.Usertext}
        Number={elem.Number}
        redHeart={elem.redHeart}
        model={elem.model}
        oldPrice={elem.oldPrice}
      />
    ))}
  </div>
</div>

{/* Recommendation Section */}
<div className="mt-16 mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24">
  <ul className="flex justify-between text-[#90A3BF] text-sm sm:text-base md:text-lg lg:text-2xl">
    <li>Recommendation Car</li>
  </ul>
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[320px] xl:gap-6 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
    {data2.map((elem) => (
      <Cards
        key={elem.id}
        image={elem.image}
        newPrice={elem.newPrice}
        tittle={elem.tittle}
        Usertext={elem.Usertext}
        Number={elem.Number}
        redHeart={elem.redHeart}
        oldPrice={elem.oldPrice}
        model={elem.model}
      />
    ))}
  </div>
</div>

                        </div>
  )
}

export default Hero



