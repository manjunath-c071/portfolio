import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css"; // optional if you have styles

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhnz547",   // Service ID
        "template_g4oh1qa",  // Template ID
        formRef.current,
        "yvb3HZaZWuyqc3Y_G"  // Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again!");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="input-box">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            required
          />
        </div>

        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>

        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
