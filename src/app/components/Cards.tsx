"use client";

import { RiPokerHeartsLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
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
    <RiPokerHeartsLine className="text-3xl text-[#90A3BF] cursor-pointer" />
  ),
}: cardItems) => {
  return (
    <div>
      <div className="flex flex-col justify-between transform transition duration-500 hover:scale-105 card p-5 border-5 bg-white shadow-xl border-gray-500 w-[304px] h-[388px]">
        <div className="flex justify-between  ">
          <div className="flex-col">
            <h1 className="text-[20px] text-black leading-[30px] tracking-[-2%] font-bold">
              {tittle}
            </h1>
            <p className="text-#90A3BF text-[14px] leading-[21px] tracking-[-2%] font-bold">
              {model}
            </p>
          </div>

          <div>{redHeart}</div>
        </div>

        <div className="p-10">
          <Image src={image} alt="Profile" width={202} height={156} />
        </div>

        <div className="flex gap-4">
          <div className="flex gap-1">
          <FaGasPump 
          className="h-6 w-6 text-[#90A3BF]"/>
            <span>{Number}OL</span>
          </div>

          <div className="flex  gap-1">
            <Image src="/Assets/car.png" alt="Profile" width={24} height={24} />
            <span>Manual</span>

            <div className="flex  gap-1">
            <FaUserGroup 
           className="h-6 w-6 text-[#90A3BF]"/>
              <span>{Usertext} people</span>
            </div>
          </div>
        </div>

        <div className="flex justify -between gap-10">
          <div>
            <span className="text-[20px] font-bold leading-[25.2px] text-[#1A202C]">
              {newPrice} /
            </span>
            <span className="text-[14px]">day</span>
            <h3 className="line-throug text-[14px]">{oldPrice}</h3>
          </div>
          <Link href="/Payment">
            <button className="bg-[#3563E9] hover:scale-110 transition-transform duration-200 hover:bg-[#213c8f] w-[140px] h-[56px] mt-5 text-white  #3563E9  p-3  text-[16px] leading-[24px]">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
