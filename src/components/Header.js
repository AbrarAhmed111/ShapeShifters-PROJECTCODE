import React, { useState, useEffect } from 'react';

// import header data
import {header} from '../data';

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile'

// import icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false)
  // navmobile state 
  const [navMobile, setNavMobile] = useState(false)
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    })
  })
  
  
  const {logo, btnLoginText, btnSignupText } = header;

  return (
    <>
    <section id='home'>
    <header  className={`${isActive? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]' } fixed max-w-[1640px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px[80px] transition-all duration-300`}>
    {/* LOGO */}
    <a href="/">
      <img  width={250} src={logo} alt="" />
    </a>
    {/* nav is hidden on phones and visible on desktop */}
    <Nav />
    {/* btns is hidden on phone and visible on desktop */}
    <div className='hidden space-x-4 lg:flex'>
    <button className='text-white transition btn btn-sm hover:text-primary-200'>{btnLoginText}</button>
    <button className='transition-all duration-100 btn btn-sm btn-primary hover:scale-105'>{btnSignupText}</button>
    </div>
    {/* nav menu btn - hide on desktop */}
    <div onClick={() => setNavMobile(!navMobile)} className='absolute lg:hidden right-4'>
      {navMobile ? (
      <RiCloseFill className ='text-3xl cursor-pointer text-primary-200' />) :
      (<RiMenu4Fill className='text-3xl cursor-pointer text-primary-200'/>)}
    </div>
    {/* nav mobile hidden on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
    </section>
    </>
    
    )};
    

export default Header;
