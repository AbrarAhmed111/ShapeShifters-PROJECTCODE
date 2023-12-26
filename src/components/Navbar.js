import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
// import logo from '../assets/logo-Chatbase.png';
const Navbar = () => {
  return (
    <div className='max-w-[100%] py-5 px-7 bg-transparent'>

        <div className='flex items-center justify-between '> 
            {/* right side of the navbar */}
            <div className='flex items-center gap-3 hover:cursor-pointer'>
            
                <img src="https://www.chatbase.co/images/chatbase-logo.svg" alt="/" 
                className='h-[30px] w-[30px]'
                />
                <p className='hidden sm:block hover:cursor-pointer'>Chatbase</p>
            </div>
            
            <div>
                {/* middle of the navbar */}
                <div className='hidden lg:block'>
                    <ul className='flex gap-10 hover:cursor-pointer'>
                        <li>Demo</li>
                       <a href="https://affiliates.chatbase.co/signup"> <li>Affiliate</li> </a>
                        <a href="https://www.chatbase.co/pricing"> <li>Pricing</li> </a>
                        <a href="https://docs.chatbase.co/docs"> <li>API</li> </a>
                         <a href="https://www.chatbase.co/guide/main"><li>Guide</li> </a>
                    </ul>
                </div>
            </div>

            <div className='hidden lg:block'>
                {/* right side of the navbar */}
                <div className='flex items-center gap-3'>
                    <p className='hover:cursor-pointer'>Log in</p>
                    <button className='border rounded-md bg-[#6f44fc] text-white px-2 py-1  font-medium'>Try for Free &rarr;</button>
                </div>
            </div>
             {/* menu button */}
             <div className='block cursor-pointer lg:hidden'>
                    <AiOutlineMenu/>
                </div>
        </div>
    </div>
  )
}

export default Navbar;