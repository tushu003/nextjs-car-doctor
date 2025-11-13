import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
  return (
    <div>
            <p className='text-[#FF3811] font-bold text-center mt-6'>service</p>
        <h2 className='text-black font-bold text-center text-2xl mb-1'>Our Service Area</h2>
        <p className='text-center text-gray-600 mb-6'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        <div>
            <div>
                <Image />
            </div>
        </div>
    </div>
  )
}
