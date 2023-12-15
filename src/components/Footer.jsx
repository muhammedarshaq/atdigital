import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#6B3CC9] w-full xl:h-[350px] lg:h-[350px] md:h-[520px] h-[825px] flex flex-col xl:gap-0 lg:gap-0 md:gap-0 gap-6'>
            <div className='xl:pt-[40px] xl:pr-[80px] xl:pb-[20px] xl:pl-[80px] lg:pt-[40px] lg:pr-[80px] lg:pb-[20px] lg:pl-[80px] md:pt-[40px] md:pr-[80px] md:pb-[20px] md:pl-[80px] pt-[40px] pr-[20px] pl-[20px] flex xl:flex-row lg:flex-row justify-between flex-col md:gap-10 gap-14'>
                <div className='xl:w-[413px] lg:w-[400px] md:w-[413px] w-[325px]'>
                    <img src={logo} alt="logo" className='pb-5' />
                    <p className="text-white font-['Lato'] text-[16px]">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className='flex xl:gap-[128px] lg:gap-[128px] md:gap-[128px] xl:flex-row lg:flex-row md:flex-row flex-col gap-10'>
                    <div>
                        <h1 className='text-white text-[21px] capitalize'>Our technolgies</h1>
                        <ul className='py-3 text-white grid gap-3 text-[14px]'>
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>GraphQL</li>
                            <li>Laraval</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-white text-[21px] capitalize'>Our Services</h1>
                        <ul className='py-3 text-white grid gap-3 text-[14px]'>
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                            <li>Google Marketing solutions</li>
                            <li>Search Engine Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-x-white w-[70%] flex justify-center mx-auto '>
                <span className='capitalize py-2 text-white text-[14px]'>Privacy policy&nbsp;&nbsp;|&nbsp;&nbsp;terms & conditions</span>
            </div>
        </div>
    )
}

export default Footer