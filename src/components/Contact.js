import React from "react"
import Typewriter from "typewriter-effect"
import { navigate } from "gatsby-link"
import "../styles/contact.scss"
import Sending from "./Sending"
import emailjs from 'emailjs-com';

export default function Contact({ close }) {
  const [state, setState] = React.useState({})
  const [messageSending, setMessageSending] = React.useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {


    e.preventDefault()
      emailjs.send('service_cj7vl9v', 'template_hil9c96', state, '6t1QhvlcIZ9tNrJky')
        .then((response) => {
          console.log('Email sent:', response);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    
    // setMessageSending(true)
    // const url = `/.netlify/functions/contact`
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(state),
    // })
    //   .then(response => {
    //     response.ok
    //       ? navigate("/success")
    //       : alert("An error occured while trying to send contact message!")
    //     setMessageSending(false)
    //   })
    //   .then(close)
  }

  return (
    <div className="contactContainer">
      <div style={{ margin: "auto", minWidth: "100%" }}>
        <h1 className="contactH1">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Contact me")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        <form
          name="contact"
          method="post"
          // action="/contact-us"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact"></input>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required={true}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder="E-Mail address"
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required={true}
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            rows="3"
            onChange={handleChange}
          ></textarea>
          {messageSending ? (
            <button type="submit" disabled={messageSending}>
              {/* <Sending /> */}
            </button>
          ) : (
            <button type="submit" disabled={messageSending}>
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
