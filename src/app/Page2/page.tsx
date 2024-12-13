import SideMenue from '@/app/components/sideMenue';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { IoArrowDown, IoArrowUp, IoHeart } from 'react-icons/io5';
import Cards from '../components/Cards';
import Link from 'next/link';

const data = [
  { id: 1, tittle: "Koenigsegg", Usertext: 2, newPrice: "$99.00", Number: 9, image: "/Assets/car-01.png", redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' /> },
  { id: 2, tittle: "Nissan GT - R", Usertext: 2, newPrice: "$80.00", Number: 8, image: "/Assets/car-2.png", oldPrice: "$100.00" },
  { id: 4, tittle: "Nissan GT - R", Usertext: 2, newPrice: "$80.00", oldPrice: "$100.00", Number: 8, image: "/Assets/car-2.png" },
];

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

]

const Page2 = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="hidden lg:flex w-[200px] xl:w-[300px] mx-h-[180px] bg-white shadow-lg">
        <SideMenue />
      </div>

      {/* Main Content */}
      <div className="mt-10 lg:mt-0 flex-1 mx-5 lg:mx-10 bg-[#F6F7F9]">

        <div className="flex flex-col xl:flex-row justify-center lg:justify-between items-center gap-0 lg:gap-0 mt-5 lg:mt-10">
          {/* Pickup Card */}
          <div className="w-full md:w-[500px] lg:w-[386px] lg:h-[136px] bg-white rounded-[10px] shadow-xl px-4 py-4 lg:p-2">
            <div className="flex gap-3">
              <Image src="/Assets/mark.png" alt="mark" width={20} height={20} />
              <h3 className="text-[16px] lg:text-xl font-semibold text-gray-800">Pick-Up</h3>
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
              <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>
              {/* Date */}
              <div className="flex-1">
                <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Date</h1>
                <div className="flex gap-2 items-center">
                  <p className="text-[14px] font-normal text-[#90A3BF]">Select your Date</p>
                  <IoIosArrowDown />
                </div>
              </div>
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
          <div className="flex justify-center  lg:mt-0">
            <div className="bg-[#3563E9] w-[64px] h-[64px] hover:bg-[#2b4699] flex justify-center 
            items-center rounded-xl">
              <IoArrowUp className="text-white text-3xl" />
              <IoArrowDown className="text-white text-3xl" />
            </div>
          </div>

          {/* Day-Off Card */}
          <div className="w-full md:w-[500px] lg:w-[386px] lg:h-[136px] bg-white rounded-[10px] 
          shadow-xl px-4 py-4">
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
              <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>
              {/* Date */}
              <div className="flex-1">
                <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">Date</h1>
                <div className="flex gap-2 items-center">
                  <p className="text-[14px] font-normal text-[#90A3BF]">Select your Date</p>
                  <IoIosArrowDown />
                </div>
              </div>
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

        {/* Products Section */}
        <div className="flex justify-center mt-16 w-full text-[#90A3BF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-2 
          xl:gap-6 gap-6">
            {data.map((elem) => (
              <Cards
                key={elem.id}
                image={elem.image}
                newPrice={elem.newPrice}
                tittle={elem.tittle}
                Usertext={elem.Usertext}
                Number={elem.Number}
                redHeart={elem.redHeart}
                oldPrice={elem.oldPrice}
              />
            ))}
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="flex justify-center  mt-10 w-full text-[#90A3BF]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-2 
          xl:gap-6 gap-6">
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

        {/* Show More Button */}
        <div className="  text-center mt-20">
          <Link href="/Page3">
            <button className="bg-[#3563E9] text-center text-[12px] p-[16px] hover:bg-[#213c8f] rounded-[4px] text-white md:p-[20px] font-[600] lg:text-[16px]">
              Show more Car
            </button>
        <span className='relative font-bold  left-20 md:left-[250px] xl:left-[350px] text-[#90A3BF] 
        text-[14px] md:text-[20px] leading-[21px] tracking-[-2%]'>120 Cars</span>

          </Link>
        </div> 
      </div>
    </div>
  );
};

export default Page2;
