"use client";

import { FormEvent, useState } from 'react'
import Confetti from 'react-confetti'

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
          <h1 className="head_text">
            Let's get in touch!
          </h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col lg:flex-row items-start justify-between gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            My Socials
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/3">
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
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;