import React from 'react'
import monitor from '../assets/monitor.png'
import magnifier from '../assets/magnifier.png'
import Button from './Button'

const Development = () => {
    return (
        <div className='w-full xl:pt-16 lg:pt-[40px] md:pt-[325px] xl:px-48 lg:px-20 md:px-6 pt-[275px]'>
            <div className="max-w-[1920px] mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center h-full px-5 pb-20">
                <img src={monitor} alt="monitor" className='xl:w-[415px] lg:w-[345px] w-[275px]' />
                <div className='flex flex-col gap-5'>
                    <h1 className="text-[#6B3CC9] font-semibold text-[27px] font-['Poppins'] md:leading-[33px] xl:text-left lg:text-left md:text-left text-center" >Web & Mobile App Development</h1>
                    <p className='text-[16px] xl:text-left lg:text-left md:text-left text-center font-normal'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <Button className='mx-auto' text="learn more" />
                </div>
            </div>
            <div className="max-w-[1920px] mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center h-full px-10 pb-14">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-[#6B3CC9] font-semibold text-[27px] font-['Poppins'] md:leading-[33px] xl:text-left lg:text-left md:text-left text-center" >Digital Strategy Consulting</h1>
                    <p className='text-[16px] xl:text-left lg:text-left md:text-left text-center font-normal'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <Button className='mx-auto' text="learn more" />
                </div>
                <img src={magnifier} alt="magnifier" className='xl:w-[415px] lg:w-[345px] w-[275px]' />
            </div>
        </div >
    )
}

export default Development