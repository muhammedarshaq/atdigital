import React from 'react'

const Button = ({text, styles}) => {
    return (
        <button className='bg-[#F28D35] w-fit px-[20px] py-[12px] rounded uppercase font-semibold text-white text-[14px] xl:mx-0 lg:mx-0 md:mx-0 mx-auto'>{text}</button>
    )
}

export default Button