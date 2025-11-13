import Image from 'next/image';
import React from 'react';
import group from "../../../public/assets/icons/Group 71.png";
import group1 from "../../../public/assets/icons/Group 38730.png";
import group2 from "../../../public/assets/icons/Group 38731.png";
import group3 from "../../../public/assets/icons/Wrench.png";
import group4 from "../../../public/assets/icons/Group.png";
import group5 from "../../../public/assets/icons/Group 38729.png";

export default function WhyChoose() {
  return (
    <div className='mb-10'>
            <p className='text-[#FF3811] font-bold text-center mt-10'>Core Features</p>
        <h2 className='text-black font-bold text-center text-2xl mb-1'>Why Choose Us</h2>
        <p className='text-center text-gray-600 mb-6'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8'>
            <div className='p-6 rounded-[4px] border border-gray-200 text-center items-center'>
                <Image src={group} alt='group' width={28} height={28} className='my-1 ml-10 ' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
            <div className='p-6 rounded-[4px] bg-[#FF3811] border border-gray-200'>
                <Image src={group5} alt='group' width={28} height={28} className='my-1 ml-10' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
            <div className='p-6 rounded-[4px] border border-gray-200'>
                <Image src={group4} alt='group' width={28} height={28} className='my-1 ml-10' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
            <div className='p-6 rounded-[4px] border border-gray-200'>
            <Image src={group3} alt='group' width={28} height={28} className='my-1 ml-10' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
            <div className='p-6 rounded-[4px] border border-gray-200'>
                <Image src={group1} alt='group' width={28} height={28} className='my-1 ml-10' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
            <div className='p-6 rounded-[4px] border border-gray-200'>
                <Image src={group2} alt='group' width={28} height={28} className='my-1 ml-10' />
                <p className='text-black font-bold text-center text-[18px] mb-1'>Expert Team</p>
            </div>
        </div>
    </div>
  )
}
