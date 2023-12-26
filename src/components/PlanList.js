import React, {useState} from 'react';

// import icons
import {BsCheckCircleFill} from 'react-icons/bs'

const PlanList = ({plans}) => {
  // index state
  const [index, setIndex] = useState(0)
  return (
    <>
    <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>

    {plans.map((plan, currentIndex) =>
    { 
      const {name, price, list, delay} = plan;
      return <div onClick={() => setIndex(currentIndex)} className=' w-full px-4 md:max-w-[620px] lg:max-w-[405px] rounded-sm lg:min-h-[550px]' key={currentIndex} data-aos='fade-up'  data-aos-offset="200" data-aos-delay={delay}>
        <div className={`${currentIndex===index ? 'bg-neutral-500 text-white' : 'bg-neutral-400/10 text-neutral-500'} shadow-sm cursor-pointer shadow-black hover:scale-105 duration-200 flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition `}>
       <div className='flex flex-row items-center lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 '>
         {/* Name and price wrapper */}
         <div >
          {/* Name */}
          <div className={`${currentIndex===index? 'bg-white text-neutral-500' : 'bg-neutral-500 text-white' } h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}>{name}</div>
          {/* price */}
          <div className='text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center '>
          <div className='leading-none'>
            <span className='tracking-[0.1px]'>{price}</span>
            <span className='text-[30px] font-extrabold'>$</span>
            </div>
            <span className='text-sm font-medium'>/month</span>
          </div>
        </div>
        {/* list and btn wrapper */}
        <div>
          {/* list */}
          <ul className='flex flex-col mb-8 gap-y-4'>
            {list.map((item,idx) => {
              return <li className='flex items-center gap-x-[10px]' key={idx}>
                <BsCheckCircleFill className='text-lg'/>
                <div>{item.name}</div>
              </li>
            })}
          </ul>
          {/* btn */}
          <button className={`${currentIndex===index ? 'bg-white text-neutral-500' : 'border border-neutral-500'} btn btn-lg rounded-[1px] lg:mx-auto hover:bg-primary-200 hover:border-primary-200 transition duration-400`}>Join now</button>
        </div>
       </div>
        </div>
      </div>

})}
    
    
</div>
    </>
  );
};

export default PlanList;
