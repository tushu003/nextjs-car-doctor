import Image from 'next/image';
import React from 'react';
import banner from "../../../public/assets/images/banner/bannar.jpg"

export default function Banner() {
  return (
    <div>
        <div className='banner '>
            {/* <Image src={banner} alt='banner' w-full='true' className='' /> */}
            <div className='absolute lg:mt-[-240px]'>
                <h1>Affordable <br/> Price For Car <br/> Servicing</h1>
            </div>
        </div>
    </div>
  )
}
