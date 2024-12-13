import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDown, IoArrowUp, IoHeart } from "react-icons/io5";
import Cards from "./Cards";
import Link from "next/link";

const data = [
  {
    id: 1,
    tittle: "Koenigsegg",
    Usertext: 2,
    newPrice: "$99.00",
    Number: 9,
    image: "/Assets/car-01.png",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 2,
    tittle: "Nissan GT - R",
    Usertext: 2,
    newPrice: "$80.00",
    Number: 8,
    image: "/Assets/car-2.png",
    oldPrice: "$100.00",
  },
  {
    id: 3,
    tittle: "Rolls - Royce",
    Usertext: 4,
    newPrice: "$96.00",
    model: "Sedan",
    Number: 7,
    image: "/Assets/car-1.png",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 4,
    tittle: "Nissan GT - R",
    Usertext: 2,
    newPrice: "$80.00",
    oldPrice: "$100.00",
    Number: 8,
    image: "/Assets/car-2.png",
  },
];

const data2 = [
  {
    id: 1,
    tittle: "All New Rush",
    Usertext: 7,
    newPrice: "$72.00",
    model: "SUV",
    oldPrice: "$80.00",
    Number: 6,
    image: "/Assets/car-123.png",
  },
  {
    id: 2,
    tittle: "CR  - V",
    model: "SUV",
    Usertext: 8,
    newPrice: "$80.00",
    Number: 6,
    image: "/Assets/car-20.png",
    oldPrice: "$100.00",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 3,
    tittle: "All New Terios",
    model: "SUV",
    Usertext: 6,
    newPrice: "$74.00",
    Number: 9,
    image: "/Assets/car-21.png",
  },
  {
    id: 4,
    tittle: "CR  - V",
    Usertext: 6,
    model: "SUV",
    newPrice: "$80.00",
    oldPrice: "$80.00",
    Number: 8,
    image: "/Assets/car-20.png",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 5,
    tittle: "MG ZX Exclusice",
    Usertext: 4,
    newPrice: "$76.00",
    model: "Hatchback",
    oldPrice: "$80.00",
    Number: 7,
    image: "/Assets/car-17.png",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 6,
    tittle: "New MG ZS",
    model: "SUV",
    Usertext: 8,
    newPrice: "$80.00",
    Number: 6,
    image: "/Assets/car-18.png",
  },
  {
    id: 7,
    tittle: "MG ZX Excite",
    model: "Hatchback",
    Usertext: 4,
    newPrice: "$74.00",
    Number: 9,
    image: "/Assets/car-17.png",
    redHeart: <IoHeart className="text-[#ED3F3F] text-3xl" />,
  },
  {
    id: 8,
    tittle: "New MG ZS",
    Usertext: 6,
    model: "SUV",
    newPrice: "$80.00",
    Number: 8,
    image: "/Assets/car-19.png",
  },
];

const Hero = () => {
  return (
    <div className="overflow-hidden w-full mt-10 lg:mt-0  bg-[#F6F7F9]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-auto gap-4 p-8">
        {/* First Card */}
        <div className="bg-[#54A6FF] max-w-[640px] h-[360px] text-white rounded-[10px] flex flex-col items-start justify-between p-5 relative">
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-[32px] leading-10 tracking-tight text-left">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="mb-4 text-base font-medium tracking-tight">
              Ease of doing car rental safely and <br /> reliably. Of course at
              a low price.
            </p>
            <Link href="/Payment">
              <button className="bg-[#3563E9] w-[120px] h-11 text-base font-medium tracking-tight hover:bg-[#54A6FF text-white px-5 rounded-[4px]">
                Rental Car
              </button>
            </Link>
          </div>
          <div className="absolute bottom-4 left-4">
            <Image
              src="/Assets/car-01.png"
              alt="Car 1"
              height={400}
              width={500}
              className="lg:ml-0  xl:ml-28 "
            />
          </div>
        </div>

        {/* {/* Second Card  */}
        <div className="hidden md:flex bg-[#3563E9] max-w-[640px] h-[360px] text-white rounded-[10px] flex-col items-start justify-between p-5 relative">
          <div className="flex-1">
            <h1 className="mb-4 font-medium text-[32px] leading-10 tracking-tight text-left">
              Easy way to rent a <br />
              car at a low price
            </h1>
            <p className="mb-4 text-base font-medium tracking-[-3%]">
              Providing cheap car rental services <br />
              and safe and comfortable facilities.
            </p>
            <Link href="/Payment">
              <button className="bg-[#54A6FF] w-[120px] h-11 text-base font-medium tracking-tight hover:bg-blue-700 text-white px-5 rounded-[4px]">
                Rental Car
              </button>
            </Link>
          </div>
          <div className="absolute bottom-4 right-40">
            <Image
              src="/Assets/car-2.png"
              alt="Car 1"
              height={450}
              width={560}
              className="lg:ml-10  xl:ml-28 "
            />
          </div>
        </div>
      </div>
      {/* drop- Cards */}

      <div
        className="place-content-center flex flex-col md:mt-10 md:items-center md:ml-20  md:mx-40 lg:mx-20 xl:mx-10 
  lg:flex-row  lg:justify-between items-center lg:items-start lg:gap-0 mt-0 mx-auto 
  lg:mt-10"
      >
        {/* Pickup Card */}
        <div
          className="lg:items-start md:w-[500px] md:items-center w-[327px]  lg:mx-w-[600px] xl:mx-w-[582px]  lg:mr-10 bg-white rounded-[10px] shadow-xl 
  px-4 py-4"
        >
          <div className="flex gap-3">
            <Image src="/Assets/mark.png" alt="mark" width={20} height={20} />
            <h3 className=" text-[16px] lg:text-xl font-semibold text-gray-800">
              Pick-Up
            </h3>
          </div>

          <div className="mt-5 flex flex-row justify-between items-center">
            {/* Location */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px] tracking-[-2%]">
                Location
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-bold text-[#90A3BF]">
                  Select your city
                </p>
                <IoIosArrowDown />
              </div>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

            {/* Date */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">
                Date
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-normal text-[#90A3BF]">
                  Select your Date
                </p>
                <IoIosArrowDown />
              </div>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

            {/* Time */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">
                Time
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-normal text-[#90A3BF]">
                  Select your Time
                </p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Button */}
        <div className="md:relative lg:left-[50px]  xl:left-[150px] flex justify-center mt-0 lg:mt-10 ">
          <div className="flex bg-[#3563E9] w-[64px] h-[64px] z-[1000] lg:mx-w-[60px] lg:mx-h-[60px] hover:bg-[#2b4699] justify-center items-center rounded-xl">
            <IoArrowUp className="text-white text-3xl" />
            <IoArrowDown className="text-white text-3xl" />
          </div>
        </div>

        {/* Day-Off Card */}
        <div
          className=" md:w-[500px] lg:ml-[100px] xl:ml-[300px]  w-[327px]  xl:mx-w-[582px]  mx-auto lg:mr-10 bg-white rounded-[10px] shadow-xl 
  px-4 py-4"
        >
          <div className="flex gap-3">
            <Image src="/Assets/mark.png" alt="mark" width={20} height={20} />
            <h3 className="text-[16px] lg:text-xl font-semibold text-gray-800">
              Day-Off
            </h3>
          </div>

          <div className="mt-5 flex flex-row justify-between items-center">
            {/* Location */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">
                Location
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-bold text-[#90A3BF]">
                  Select your city
                </p>
                <IoIosArrowDown />
              </div>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

            {/* Date */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">
                Date
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-normal text-[#90A3BF]">
                  Select your Date
                </p>
                <IoIosArrowDown />
              </div>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block h-[50px] w-px bg-gray-300 mx-6"></div>

            {/* Time */}
            <div className="flex-1">
              <h1 className="text-[#1A202C] font-extrabold text-[16px] leading-[24px]">
                Time
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-normal text-[#90A3BF]">
                  Select your Time
                </p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popular cars */}

      <div className="mt-10 mx-4 sm:mx-8 lg:mx-12 max-w-[1312px] text-[#90A3BF]">
        <div className="  flex justify-between items-center">
          <h3 className="font-semibold text-lg lg:text-2xl">Popular Car</h3>
          <Link href="#">
            <p className="font-medium text-lg lg:text-xl hover:text-blue-500 cursor-pointer">
              View All
            </p>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* 'Recommendation Car' */}
      <div className="mt-10 mx-4 sm:mx-8 lg:mx-12 max-w-[1312px] text-[#90A3BF]">
        <div className="  flex justify-between items-center">
          <h3 className="font-semibold text-lg lg:text-2xl">
            Recommendation Car
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* recommendation cards */}
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

      <div className="item-center mx-auto text-center mt-20">
        <Link href="/Page2">
          {" "}
          <button
            className="bg-[#3563E9] hover:bg-[#213c8f] rounded-[4px]
 text-white p-[20px] font-[600] text-[16px] mx-w-[156px] mx-h-[44px]"
          >
            Show more Car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
