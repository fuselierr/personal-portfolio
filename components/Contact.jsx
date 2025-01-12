"use client";

import { FormEvent, useState } from 'react'
import Confetti from 'react-confetti'
import { FaEnvelope, FaLinkedin, FaFacebook, FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }
    
  }


  return isSubmitted? (
    <div>
      <h1
        className="text-center font-semibold text-3x1">
          Message received, thanks!
        </h1>
        <Confetti/>
    </div>
  ) : (
    <section className="w-full py-12 flex flex-col items-center">
      <div className="py-4">
          <h1 className="head_text mb-8">
            Let's get in touch!
          </h1>
      </div>
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row items-start justify-between">
        <div className="">
          <h2 className="text-2xl font-bold mb-8 text-center">
            My Socials:
          </h2>
          <div className="grid grid-cols-2 gap-12 place-items-center mb-8">
            <a href="mailto:mike.gao312@hotmail.com" className="opacity-50 hover:opacity-100 transform hover:scale-110 transition duration-300">
              <FaEnvelope className="w-16 h-16"/>
            </a>
            <a href="https://www.linkedin.com/in/mikegao000" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transform hover:scale-110 transition duration-300">
              <FaLinkedin className="w-16 h-16"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010617818792" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transform hover:scale-110 transition duration-300">
              <FaFacebook className="w-16 h-16"/>
            </a>
            <a href="https://discord.com/users/329346574629208064" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transform hover:scale-110 transition duration-300">
              <FaDiscord className="w-16 h-16"/>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-center">
              Shoot me a message!
          </h2>
          <div className="form-group block py-2">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              maxLength="50"
              className="input w-full input-bordered input-primary rounded-lg border border-gray-400 p-2"
            />
          </div>

          <div className="form-group block py-2">
            <label htmlFor="email" className="block py-2">Email:</label>
            <input
              className="input w-full input-bordered input-primary rounded-lg border border-gray-400 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="janedoe@example.zzz"
            />
          </div>

          <div className="form-group block py-2">
            <label className="label font-semibold block py-2">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea w-full textarea-primary h-48 rounded-lg border border-gray-400 p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Mike, you're so cool and..."
              maxLength="1000">
            </textarea>
          </div>

          <div className="form-group">
            <button className="btn outline_btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;