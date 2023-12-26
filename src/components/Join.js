import React from 'react';
import { join } from '../data';

const Join = () => {
  const {image, subtitle, btnText} = join;
  return (
    <>
    <section id='join' className='bg-neutral-500 min-h-[537px]'>
    <div className='container mx-auto'>
    {/* image and text wrapper */}
    <div className='flex flex-col -space-y-24 md:flex-row md:items-center md:-space-x-12 lg:-space-y-0'>
      {/* image */}
      <div data-aos='fade-right' data-aos-offset='100' data-aos-delay='200' className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full'>
        <img src={image} width={500} alt="" />
      </div>
      {/* text */}
      <div data-aos='fade-left' data-aos-offset='100' data-aos-delay='200' className='max-w-[350px] lg:max-w-[492px] ml-[30px]'>
        <h2 className='text-white h1 md:text-[60px] mb-4 lg:mb-6 md:leading-[62px]'>Wanna join <span className='text-primary-200'>&</span> have fun?</h2>
        <p className='text-white text-body-sm md:text-body-md lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]'>{subtitle}</p>
        <button className='btn btn-secondary btn-lg'>{btnText}</button>
      </div>
    </div>
    
    
    
    </div>

    </section>

    </>
  );
};

export default Join;
