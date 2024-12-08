import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className="px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <h1
              className={`text-[24px] md:text-[32px] leading-[48px] tracking-[-3%] font-extrabold text-blue-500`}
            >
              MORENT
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative gap-8 mr-20 md:mr-10 lg:0  items-center flex justify-between text-[#596780] bg-gray-100 px-3 py-2 w-[263px]  md:w-[492px] h-[48px] rounded-md">
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
              className="bg-transparent w-full text-sm outline-none"
            />
            <Image
              src="/Assets/filter.png"
              alt="Filter"
              width={20}
              height={30}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          {/* Profile & Notification */}
          <div className=" hidden md:flex items-center space-x-6">
            <Link href="#">
              <FaHeart className="text-gray-500 w-[24px] h-[24px] " />
            </Link>
            <Link href="#">
              <AiFillBell className="text-gray-500 w-[24px] h-[24px] " />
            </Link>
            <IoIosSettings className="text-gray-500 w-[24px] h-[24px]" />

            <Image
              src="/Assets/img1.png"
              alt="Profile"
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
