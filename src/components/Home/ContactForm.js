import React, { useState } from "react";
import "./ContactForm.css";
import { Button } from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemlerini burada gerçekleştirin
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="cf-title">
        <h3>Share Your Thougths</h3>
      </div>
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="type here.."
        />
      </label>
      <br />
      <label>
        Your E-Mail Adress:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="type here.."
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="type here.."
        />
      </label>
      <br />
      <label>
        Your Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type here.."
        ></textarea>
      </label>
      <br />
      <div className="cf-button-container">
        <div className="cf-button">
          <Button buttonSize={"btn--large"} buttonStyle={"btn--primary"}>
            Send The Contact Form <i class="fas fa-paper-plane"></i>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
