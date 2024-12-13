import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 mb-[800px] shadow-md ">
      <div className="xl:mx-10 max-w-[1440px] h-[124px] flex flex-col gap-2 sm:flex-row items-center sm:justify-between px-4 py-4 mx-auto">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            href="./"
            className={`${plusJakartaSans.className} lg:ml-[50px] text-[24px] md:text-[32px] leading-[48px] tracking-[-3%] font-bold text-blue-500`}
          >
            MORENT
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative ml-40 md:ml-0 flex items-center gap-4 md:mr-10 mr-40 md:w-[492px] h-[48px] border-[1px] border-[#C3D4E9]-white px-3 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.59a1 1 0 11-1.42 1.42l-4.58-4.59zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent w-[200px] lg:w-[400px] text-sm outline-none"
          />
          <Image
            src="/Assets/filter.png"
            alt="Filter"
            width={20}
            height={30}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Mobile Profile Image */}
        <Link href="/Dashboard">
          <Image
            src="/Assets/img1.png"
            alt="Profile"
            width={44}
            height={44}
            className="relative bottom-[100px] left-36 rounded-full md:hidden"
          />
        </Link>

        {/* Profile and Notification */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
            <FaHeart className="text-gray-600 w-6 h-6 hover:text-red-500 cursor-pointer" />
          </div>
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px] relative">
            <AiFillBell className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <div className="w-11 h-11 rounded-full border-[1px] border-[#C3D4E9] border-opacity-[80%] px-[10px] py-[10px]">
            <IoIosSettings className="text-gray-600 w-6 h-6 hover:text-blue-500 cursor-pointer" />
          </div>

          <div className="w-11 h-11 rounded-full">
            <Link href="/Dashboard">
              <Image
                src="/Assets/img1.png"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
