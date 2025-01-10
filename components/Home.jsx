"use client"

import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
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
    </section>
  )
}

export default Home