"use client"

import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <Typewriter
                options = {{
                    strings:['Hi, I\'m Mike Gao.'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </h1>
    </section>
  )
}

export default Home