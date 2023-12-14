import React from 'react'
import hero from '../assets/hero.png'
import Button from './Button'

const Hero = () => {
    return (
        <div>
            <div className='bg-cover bg-center w-full xl:h-[700px] lg:h-[700px] md:h-[448px] h-[218px]' style={{
                backgroundImage: `url(${hero})`,
            }}>
                <div className='bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] xl:w-[630px] xl:h-[306px] lg:w-[630px] lg:h-[306px] absolute   flex flex-col z-0 xl:top-[420px] xl:left-[80px] lg:top-[420px] lg:left-[80px] md:top-[525px] top-[295px] pt-[24px] pl-[40px] pr-[32px] pb-[40px] gap-5'>
                    <p className='xl:text-[48px] lg:text-[48px] text-[36px] font-bold text-white xl:leading-[48px] lg:leading-[48px] leading-[36px] capitalize'>We crush your competitors, goals, and sales records - without the B.S.</p>
                    <Button text="Get free consultation" />
                </div>
            </div>
        </div>
    )
}

export default Hero