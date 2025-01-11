"use client"

import Typewriter from 'typewriter-effect';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home" className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="name_text text-center">
            <Typewriter
                options = {{
                    strings:['Hi, I\'m <br> Mike Gao.'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 2000
                }}
            />
        </h1>
        <Link href="#about">
        <div className="absolute bottom-5 left-0 right-0 mx-auto animate-bounce flex flex-col items-center">
          <h4 className="body_text text-center mb-1">
            Psst! Click here!
          </h4>
          <FaArrowDown className="w-6 h-6"/>
        </div>
        </Link>
    </section>
  )
}

export default Home