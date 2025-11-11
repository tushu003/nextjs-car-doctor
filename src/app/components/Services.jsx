import Image from 'next/image'
import React from 'react'
import { GrFormNextLink } from 'react-icons/gr';

export default function Services() {
    const data = [
        {
            
            "service_id": "04",
            "title": "Engine Oil Change",
            "img": "https://i.ibb.co/T2cpBd5/888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            
            "service_id": "05",
            "title": "Battery Charge",
            "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            
            "service_id": "01",
            "title": "Full car Repair",
            "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
            "price": "200.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            
            "service_id": "02",
            "title": "Engine Repair",
            "img": "https://i.ibb.co/5MvmD2g/88.jpg",
            "price": "150.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            
            "service_id": "03",
            "title": "Automatic Services",
            "img": "https://i.ibb.co/wh7t3N3/555.jpg",
            "price": "30.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            
            "service_id": "06",
            "title": "Electrical System",
            "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        }
    ]
    
  return (
    <div>
        <p className='text-[#FF3811] font-bold text-center'>service</p>
        <h2 className='text-black font-bold text-center text-2xl mb-1'>Our Service Area</h2>
        <p className='text-center text-gray-600 mb-6'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
          <div className=' grid grid-cols-12 gap-3'>
        {
            data.map((item)=>(
                <article
            key={item._id}
            className="bg-white rounded-lg p-4 border border-[#E8E8E8] overflow-hidden col-span-12 md:col-span-6 lg:col-span-4 gap-3"
          >
            <div className="relative w-full h-50 mb-2">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-[8px]"
                
                unoptimized
              />
            </div>
  
            <div className=" flex-1 flex flex-col">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            
  
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[#FF3811] font-bold">price: ${item.price}</span>
                <button className="px-3 py-1 text-[#FF3811] rounded-md text-2xl">
                  <GrFormNextLink />
                </button>
              </div>
            </div>
          </article>
            ))};
    </div>
    <div className='text-center'>
        <button className='text-[#FF3811] border border-[#FF3811] px-3 mb-8 py-2 rounded-md'>More Services</button>
    </div>
    </div>
  );
            
}
