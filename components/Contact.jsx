"use client"

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
    <section className="w-full flex-center flex-col py-16">
        <div>Let's get in touch!</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              maxLength="50"
              className="input w-full input-bordered input-primary"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input w-full input-bordered input-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="janedoe@example.zzz"
            />
          </div>

          <div className="form-group">
            <label className="label font-semibold">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea w-full textarea-primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi, You're so cool and..."
              maxLength="1000">
            </textarea>
          </div>

          <div className="form-group">
            <button className="btn outline_btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
    </section>
  )
}

export default Contact