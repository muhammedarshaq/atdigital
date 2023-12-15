import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    // Using hook for navigation bar when the screen size is reduced.
    const [nav, setNav] = useState(true);

    // This handles the navbar state
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-20 bg-[#6B3CC9] max-w-[1920px] mx-auto xl:px-20 px-5'>
            <img src={logo} alt="atdigital" />
            <ul className='md:flex text-white uppercase font-medium tracking-widest hidden text-[14px]'>
                <li className='p-5'>Services</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
                <li className='p-5'>Careers</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} color='white' /> : <AiOutlineMenu size={25} color='white' />}
            </div>
            <div className={!nav ? 'fixed z-50 left-0 top-0 w-[75%] h-full bg-[#6B3CC9] ease-in-out duration-300' : 'fixed hidden'}>
                <img className='p-10' src={logo} alt="atdigital" />
                <ul className='pt-5 uppercase text-white font-medium'>
                    <li className='px-10 pb-10'>Services</li>
                    <li className='px-10 pb-10'>About</li>
                    <li className='px-10 pb-10'>Contact</li>
                    <li className='px-10 pb-10  '>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar