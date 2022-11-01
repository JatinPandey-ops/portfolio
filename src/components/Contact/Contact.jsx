import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm(
      "service_0yfc8io",
      "template_4poixja",
      form.current,
      "s416_lK__8GP2Xp68"
    );
    try {
      toast("😎Message sent!!!",{});
      e.target.reset();
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              work with us?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below to contact us!😉
            </p>
          </div>
          {/* <SocialLinks /> */}
        </div>
        <form ref={form} id="contact-form" onSubmit={sendEmail}>
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
}
