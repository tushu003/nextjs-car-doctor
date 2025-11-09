import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/icons/logo.png'
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-[#151515] mt-8 text-base-content p-10">
  <aside>
<Image src={logo}  alt='logo' width={70} height={70} className='text-white'/>
    <p className='text-white/80'>
    Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial</p>
    <div className='flex items-center gap-2 mt-4'>
       <FaGoogle className='text-white w-4 h-4' /> / <FaFacebook className='text-white w-4 h-4' /> / <FaTwitter className='text-white w-4 h-4' /> / <FaInstagram className='text-white w-4 h-4' /> / <FaLinkedin className='text-white w-4 h-4' />
    </div>
  </aside>
  <nav>
    <h6 className="footer-title text-white">About</h6>
    <a className="link link-hover text-white/80">Home</a>
    <a className="link link-hover text-white/80">Service</a>
    <a className="link link-hover text-white/80">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white/80">Why Car Doctor</a>
    <a className="link link-hover text-white/80">About</a>
   
  </nav>
  <nav>
    <h6 className="footer-title text-white">Support</h6>
    <a className="link link-hover text-white/80">Support Center</a>
    <a className="link link-hover text-white/80">Feedback</a>
    <a className="link link-hover text-white/80">Accesbility</a>
  </nav>
</footer>
    </div>
  )
}
