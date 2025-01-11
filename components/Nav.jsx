"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white/50 backdrop-blur-md flex-between w-full mb-16 shadow-md pt-3 px-6 py-3" style={{zIndex:1}}>
        <Link href="#home" className="flex gap-2 flex-center">
            {/* <Image
                alt="My Logo"
                width={30}
                height={30}
                className="object-contain"
            /> */}
            <p className="logo_text">Mike Gao</p>
        </Link>
        <div className="sm:flex hidden gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-700">
                About Me
            </Link>
            <Link href="#experience" className="text-sm font-medium text-gray-700">
                Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-gray-700">
                Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700">
                Contact
            </Link>
        </div>

        <div className="sm:flex hidden gap-4 items-center">
            <button onClick={() => window.open("https://github.com/fuselierr", "_blank")}>
                <Image
                    src='assets/icons/github.svg'
                    alt='Github Icon'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </button>
            <button type="button" className="outline_btn" onClick={() => window.open('/Resume.pdf')}>
                Resume/CV
            </button>
        </div>
    </nav>
  )
}

export default Nav