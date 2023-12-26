import React from 'react';
import { footer } from '../data';

const Footer = () => {
  const {logo, copyrightText} = footer;
  return (
    <>
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div data-aos='fade-up' data-aos-delay='200'  className='container h-full flex justify-between items-center md:items-end md:pb-[50px] mx-auto'>
        {/* logo */}
        <a href="/" className='mr-10 lg:mr-0'>
          <img src={logo} alt="" width={250} />
        </a>
        {/* copyright text */}
        <p className='text-sm text-neutral-300'>{copyrightText}</p>
      </div>
    </footer>

    </>
  );
};

export default Footer;
