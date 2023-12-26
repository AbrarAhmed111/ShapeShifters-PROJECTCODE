import React from 'react';
import {banner} from '../data';

const Banner = () => {
  const {titlePart1, titlePart2, subtitle, textBtn} = banner;
  

  return (
    <>
    <section className='bg-neutral-500 h-[790px] shadow-md shadow-black'>
    <div className='container h-full mx-auto'>
    <div className='relative flex items-center h-full -space-x-48 lg:-space-x-24'>
    {/* text */}
    <div className='z-10 flex-1 pl-6 text-white lg:pl-0'>
      <h1 data-aos='fade-down' data-aos-delay='500' className='mb-8 text-white text-[40px] leading-[40px] lg:text-[60px] lg:leading-[62px] font-extrabold'>
        {titlePart1} <br />  <span className='text-primary-200'>{titlePart2}</span>
      </h1>
      <p data-aos='fade-down' data-aos-delay='600'  className='max-w-[415px] font-secondary font-normal text-[20px] leading-[32px] lg:text-body-lg lg:font-secondary lg:font-normal lg:text-[24px] lg:leading-[34px] mb-8'>{subtitle}</p>
      <button data-aos='fade-down' data-aos-delay='700'  className='flex justify-center items-center rounded-[1px] font-primary font-bold uppercase text-[12px] leading-[18px] h-[42px] px-[30px] tracking-[1px] lg:font-primary lg:font-bold lg:uppercase lg:text-[14px] lg:leading-[18px] lg:h-[46px] lg:px-[40px] lg:tracking-[1px] bg-white text-neutral-500 hover:bg-white/90 hover:bg-primary-200 transition'>{textBtn}</button>
    </div>
    {/* image */}
    <div data-aos='fade-right' data-aos-delay='900'  className='flex-1 w-full h-full bg-center bg-no-repeat bg-cover bg-neutral-500 bg-banner lg:bg-center'></div>
    </div>
    </div>
    </section>
    </>
    ) 
};

export default Banner;
