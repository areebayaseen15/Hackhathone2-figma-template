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
    <div className='mt-40 lg:mt-10 bg-[#F6F7F9]'>
  <div className="flex gap-10">
   
    <Image
           src="/Assets/carFrame1.png"
      alt="Profile"
      width={640}
      height={360}
      className=" lg:w-[640px] lg:h-[360px]" 
    />

    <Image
      src="/Assets/frame-02.png"
      alt="Profile"
      width={640}
      height={360}
      className="hidden lg:flex w-full lg:w-[640px] lg:h-[360px]" 
    />
  </div>

 
            {/* PickupCard */}
      <div className='flex flex-col mt-10 lg:flex-row justify-between'>
      

        <div className=" w-[327px] sm:h-[120px] mx-auto h-auto lg:w-[582px] lg:h-[136px]  bg-white px-4 py-5 rounded-lg shadow-xl p-6">
        <div className='flex gap-3'>
        <Image
          
          src="/Assets/mark.png"
          alt="mark"
          width={20}
          height={2}/>
  <h3 className="text-xl font-semibold text-gray-800 text-center">Pick-Up</h3>
            
        </div>
        
  <div className="mt-5 flex justify-between">
    {/* <!-- Location --> */}
    <div  >
      <h1 className="  text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
   
    <div className="flex gap-5">
    <p className=' text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
    <IoIosArrowDown />
    </div>
    </div>
     
    <div className="h-[50vh] sm:h-[75vh] md:h-full w-px bg-gray-500 mx-auto"></div>

    {/* <!-- Date --> */}
     <div  >
      <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
   
    <div className="flex gap-5">
    <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
    <IoIosArrowDown />
    </div>
    </div  >
     
    {/* <!-- Time --> */}
    <div  >
      <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
   
    <div className="flex gap-5">
    <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
    <IoIosArrowDown />
    </div>
    </div>
  </div>
</div>
<div className="arrow my-10 mx-10">
    <div className="flex bg-[#3563E9] w-[60px] h-[60px] hover:bg-[#2b4699] px-2 py-4 rounded-xl">
    <IoArrowUp className="text-white text-3xl" />
    <IoArrowDown className="text-white text-3xl" />
    </div>
</div>


<div className="w-[582px] h-[136px]  bg-white px-4 py-5 rounded-lg shadow-lg p-6">
        <div className='flex gap-3'>
        <Image
          
          src="/Assets/mark.png"
          alt="mark"
          width={20}
          height={2}/>
  <h3 className="text-xl font-semibold text-gray-800 text-center">Day-Off</h3>
            
        </div>
        
  <div className="mt-5 flex justify-between">
    {/* <!-- Location --> */}
    <div  >
      <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
   
    <div className="flex gap-5">
    <p className='text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
    <IoIosArrowDown />
    </div>
    </div>
     

    {/* <!-- Date --> */}
     <div  >
      <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
   
    <div className="flex gap-5">
    <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
    <IoIosArrowDown />
    </div>
    </div  >
     
    {/* <!-- Time --> */}
    <div  >
      <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
   
    <div className="flex gap-5">
    <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
    <IoIosArrowDown />
    </div>
    </div>
  </div>
</div>

</div>

                        {/* products  section */}

                        <div className='mt-16 mx-w-[1312px] mx-h-[452px] text-[#90A3BF]'>
                          <ul className='flex justify-between text-[#90A3BF]'>
                             <li>Popular Car</li>
                             <li className='text-end'>View All</li>
                            
                          </ul>
                          <div className='mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                                 
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

                           {/* recommendation   section */}

                           <div className=' mt-16 mx-w[1312px] mx-h-[452px] text-[#90A3BF]'>
                          <ul className='flex justify-between text-[#90A3BF]'>
                             <li>Recommendation Car</li>
                            
                          </ul>
                          <div className='mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                                 
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

                        <div className='  mx-auto text-center mt-20'>
                         <Link href="/Page2"> <button className='bg-[#3563E9] rounded-[4px] text-white p-[20px] font-[600] text-[16px] mx-w-[156px] mx-h-[44px]'>
                            Show more Car
                          </button>
                          </Link>
                        </div>
                        </div>
  )
}

export default Hero

