"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            {/* <Image
                alt="My Logo"
                width={30}
                height={30}
                className="object-contain"
            /> */}
            <p className="logo_text">Mike Gao</p>
        </Link>

        <div className="sm:flex hidden gap-6 items-center">
            <a href="#about" className="text-sm font-medium text-gray-700">
                About Me
            </a>
            <a href="#experience" className="text-sm font-medium text-gray-700">
                Experience
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-700">
                Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700">
                Contact
            </a>

            <button type="button" className="outline_btn">
                Resume/CV
            </button>
        </div>
    </nav>
  )
}

export default Nav