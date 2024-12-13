"use client";

import { RiPokerHeartsLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

interface cardItems {
  tittle: string;
  Usertext: number;
  Number: number;
  image: string;
  oldPrice?: string;
  newPrice?: string;
  redHeart?: React.JSX.Element;
  model?: string;
}

const Cards = ({
  tittle,
  Usertext,
  Number,
  image,
  newPrice,
  oldPrice,
  model = "Sport",
  redHeart = (
    <RiPokerHeartsLine className="text-2xl text-[#90A3BF] cursor-pointer hover:text-[#E63946]" />
  ),
}: cardItems) => {
  return (
    <div className="flex flex-col transform transition-transform duration-300 hover:scale-105 bg-white shadow-lg border border-gray-200 rounded-lg p-5 max-w-[350px] lg:max-w-[400px]">
      {/* Title and Model */}
      <div className="flex justify-between  ">
        <div className="flex-col">
          <h1 className="text-[16px] leading-[24px] lg:text-[20px] text-[#1A202C] lg:leading-[30px] tracking-[-2%] font-bold">
            {tittle}
          </h1>
          <p className=" text-[12px] leadinh-[15.12px] text-[#90A3BF] lg:text-[14px] lg:leading-[21px] tracking-[-2%] font-bold">
            {model}
          </p>
        </div>

        <div className="w-[16px] h-[16px] lg:w[24px] lg:h-[24px]">
          {redHeart}
        </div>
      </div>

      <div className=" flex flex-row md:flex-col  justify-between gap-10 ">
        <div className="flex justify-center  mb-4">
          <Image
            src={image}
            alt="car"
            width={256}
            height={196}
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="flex flex-col lg:flex-row  justify-between md:justify-start md:gap-4 lg:gap-0 xl:gap-3 mb-4">
          <div className="flex items-center gap-2 lg:gap-0 xl:ga-2">
            <FaGasPump className="text-sm md:text-lg text-[#90A3BF]" />
            <span className="text-xs md:text-sm lg:text-base">{Number} OL</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-0 xl:gap-2">
            <TbSteeringWheel className="text-sm md:text-lg text-[#90A3BF]" />
            <span className="text-xs md:text-sm lg:text-base">Manual</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-0 xl:gap-2">
            <FaUserGroup className="text-sm md:text-lg text-[#90A3BF]" />
            <span className="text-xs md:text-sm lg:text-base">
              {Usertext} people
            </span>
          </div>
        </div>
      </div>
      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-base md:text-lg lg:text-xl font-bold text-[#1A202C]">
            {newPrice} /
          </span>
          <span className="text-sm">day</span>
          <h3 className="text-xs md:text-sm line-through text-gray-500">
            {oldPrice}
          </h3>
        </div>
        <div>
          <Link href="/Payment">
            <button
              className="bg-[#3563E9] hover:bg-[#213c8f] transition-all duration-300 rounded-lg px-4 py-2 
              md:px-5 md:py-3 text-white text-sm md:text-[16px] xl:text-lg font-semibold"
            >
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
