import React from 'react';
import Link from 'next/link';
import tailwindcss from 'tailwindcss';
import Image from 'next/image';
import logo from '../../../public/assets/icons/logo.png';

export default function NavBar() {
  const navMenu = () => {
    return (
      <>
      <li>
      <Link href={"/" }>Home</Link>
      </li>
      <li>
      <Link href={"/" }>About</Link>
      </li>
      <li>
      <Link href={"/services" }>Services</Link>
      </li>
      <li>
      <Link href={"/" }>Blog</Link>
      </li>
      <li>
      <Link href={"/" }>Contact</Link>
      </li>
      </>
    )
  }
  return (
    <div>
      <div className="navbar max-w-11/12 mx-auto mb-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      </div>
       
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navMenu()}
      </ul>
    </div>
     <Link href={"/"}><Image src={logo} alt="logo" width={70} height={70} /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navMenu()}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-[#FF3811] bg-white border border-[#FF3811]">Appointment</a>
  </div>
</div>
    </div>
  )
}
