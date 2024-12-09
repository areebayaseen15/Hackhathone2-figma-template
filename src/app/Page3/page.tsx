import SideMenue from '@/app/components/sideMenue'
import React from 'react'
import Image from "next/image"
import {  IoIosStarOutline } from 'react-icons/io'
import { IoHeart, IoStarSharp } from 'react-icons/io5'
import Link from "next/link"
import Cards from '../components/Cards'


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

  

]


const Page3 = () => {
  return (
    <div>
    <div className="mt-32 lg:mt-28 flex ">
        <div className='hidden lg:flex mx-w-[360px] mx-h-[1600px]  bg-white   shadow-lg'>
      <SideMenue/>
      </div>

      <div className=' mt-10 lg:mt-10 lg:mx-10 bg-[#F6F7F9]'>
      
        <div className="products">
            <div className= "flex flex-col items-center lg:flex-row lg:justify-between lg:gap-10  ">
                <div className='flex flex-col justify-between gap-2 lg:gap-5 '>
                <Image
        src="/Assets/view.png"
        alt="Profile"
        width={492}
        height={136}
        className='w-[327px] h-[232px] lg:mx-w-[492px] lg:mx-h-[136px]'
       
      />
                   <div className='flex justifty-between gap-5 '>
                <Image
        src="/Assets/view 1.png"
        alt="Profile"
        width={148}
        height={124}
        className='w-[96px] h-[64px] lg:w-[148px] lg:h-[124px]'
       
      />
           <Image
        src="/Assets/view 2.png"
        alt="Profile"
        width={148}
        height={124}
        className='w-[96px] h-[64px] lg:w-[148px] lg:h-[124px]'
    
       
      />
           <Image
        src="/Assets/view 3.png"
        alt="Profile"
        width={148}
        height={124}
        className='mx-w-[96px] mx-h-[64px] lg:w-[148px] lg:h-[124px]'
    
       
      />
                </div>

                </div>

           
                <div className='mt-10   w-[327px] lg:w-[492px] lg:h-[508px] rouded-[10px] bg-[#FFFFFF]'>
                <div className="card p-2  lg:p-5 text-[32px] font-bold leading-[48px] tracking-[-3%">
              <div className ="flex  justify-between">
                <h1>Nissan GT - R</h1>
                <IoHeart  className='text-[#ED3F3F] text-3xl'/>

              </div>
                     <div className='flex gap-3'>
                     <div className= "flex mt-3">
              
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoIosStarOutline className='text-2xl' />

              </div>
              <p className='text-[16px] '>440+ Reviewer</p>

             
                     </div>
            
                <p className='mt-3 text-[14px] font-normal leading-[40px] tracking-[-2%] text-[#596780]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground,
                     the "race track".</p>

                     <div className="flex flex-col lg:flex-row text-[20px] leading-[30px] justify-between gap-5 lg:gap-10 tracking-[-2%] ">

                     <div className="flex flex-col text-[18px] leading-[30px] tracking-[-2%] ">

                 
                        <div className="flex gap-10 mt-5">
                        <span className="text-[#90A3BF]">Type Car</span>
                            <span>Sport</span>
                        </div>
                        <div className="flex gap-10">
                        <span className="text-[#90A3BF]">Steering</span>
                            <span>Manual</span>
                        </div>
                    </div>
                    <div className="flex flex-col text-[18px] leading-[30px] tracking-[-2%] ">
                          
                    <div className="flex gap-10 mt-5">
                    <span className="text-[#90A3BF]">Capacity</span>
                            <span>2 Persons</span>
                        </div>

                        <div className="flex gap-10">
                        <span className="text-[#90A3BF]">Gasoline</span>
                            <span>7OL</span>
                    </div>
                        
                    </div>

                 </div>

                 
<div className="flex justify-between mt-10">
    <div >
    <span className='text-[20px] font-bold leading-[25.2px] text-[#1A202C]'>$80.00 /</span>
      <span className='text-[14px]'>days</span>
    <h3 className='line-through text-[14px]'>$100.00</h3>
    </div>

              <Link href="/Payment" ><button className='bg-[#3563E9] hover:bg-[#213c8f] w-[140px] h-[56px] text-white  #3563E9  p-3  text-[16px] leading-[24px]'>
                    Rent Now 
                </button>
                </Link> 
                </div>



                </div>
            </div>


        </div>

            </div>        
          
                  {/* reviews section */}
            <div className=" revies w-[327px]  h-[384px] lg:w-[1016px] lg:h-[452px] mt-10 bg-white pt-10 shadow-lg p-3 lg:p-8">
                <div className="header ">
                    <span className='text-[20px] font-[600] leading-[25.2px] tyracking-[-2%]'>Reviews</span>
                    <span className='bg-[#3563E9] text-white w-[440px] h-[28px] py-2 px-4 ml-3'>13</span>
                </div>
                <div className='flex flex-col mt-10'>
                    <div className='flex justify-between '>
                        <div className='flex  gap-2 lg:gap-5'>
                        <Image
        src="/Assets/Profill.png"
        alt="Profile"
        width={56}
        height={56}
       
      />
      <div className='flex flex-col gap-1 lg:gap-2' >
        <h1 className='text-[16px] lg:text-[20px] leading-[30px] tracking-[-3%] font-extrabold'>Alex Stanton</h1>
        <p  className='text-[12px] lg:text-[14px] text-[#90A3BF] leading-[21px] tracking-[-2%]'>CEO at Bukalapak</p>
      </div>
                        </div>

                        <div className='hidden lg:flex flex-col'>
                            <h1 className='text-[#90A3BF] text-14px] font-[500]'>21-July-2024</h1>
                        <div className='flex '>
                        <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoIosStarOutline className='text-2xl' />

                        </div>

                        </div>
                           <div className=' flex flex-col md:hidden'>
                            <h1 className='text-[#90A3BF] text-[12px] mr-10 font-[500]'>21-July-2024</h1>
                        <div className='flex '>
                        <IoStarSharp className='text-yellow-500  text-sm'/>
              <IoStarSharp className='text-yellow-500  text-sm'/>
              <IoStarSharp className='text-yellow-500  text-sm'/>
              <IoStarSharp className='text-yellow-500  text-sm'/>
              <IoIosStarOutline className='text-sm' />

                        </div>
                        </div>
                        

                    </div>
                    <p className=' w-[243px] text-[10px] lg:racking-[-2%] leading-[21px] lg:w-[896px] h-[56px] lg:text-[14px] lg:leading-[28px] tracking-[-2%] ml-5 lg:ml-20'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                </div>


                <div className='hidden lg:flex flex-col mt-10'>
                    <div className='flex justify-between '>
                        <div className='flex  gap-2 lg:gap-5'>
                        <Image
        src="/Assets/Profill.png"
        alt="Profile"
        width={56}
        height={56}
       
      />
      <div className='flex flex-col gap-1 lg:gap-2' >
        <h1 className='text-[16px] lg:text-[20px] leading-[30px] tracking-[-3%] font-extrabold'>Alex Stanton</h1>
        <p  className='text-[12px] lg:text-[14px] text-[#90A3BF] leading-[21px] tracking-[-2%]'>CEO at Bukalapak</p>
      </div>
                        </div>

                        <div className='hidden lg:flex flex-col'>
                            <h1 className='text-[#90A3BF] text-14px] font-[500]'>21-July-2024</h1>
                        <div className='flex '>
                        <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoStarSharp className='text-yellow-500  text-2xl'/>
              <IoIosStarOutline className='text-2xl' />

                        </div>
                        </div>
                        

                    </div>
                    <p className=' w-[243px] text-[12px] tlg:racking-[-2%] leading-[24px] lg:w-[896px] h-[56px] lg:text-[14px] lg:leading-[28px] tracking-[-2%] ml-5 lg:ml-20'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                </div>


            </div>

   {/* products  section */}

   <div className='w-full mx-5 lg:mx-0  mt-16  text-[#90A3BF]'>
                         
                         <div className='mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                                
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

                          <div className=' mt-16 mx-w[1312px] mx:auto mx-h-[452px] text-[#90A3BF]'>
                     
                         <div className='mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-3  gap-10'>
                                
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
                       </div>


                        </div>
   
    
  )
}

export default Page3
