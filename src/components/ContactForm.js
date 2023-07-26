import React, { useState } from "react";
import "./ContactForm.css";
import { Button } from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusClass, setStatusClass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, subject, message };

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      console.log(responseData);

      if (response.ok) {
        setStatusMessage(responseData.status);
        setStatusClass("status-message-success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatusMessage(responseData.status);
        setStatusClass("status-message-error");
      }

      setTimeout(() => {
        setStatusMessage("");
        setStatusClass("");
      }, 3000);
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatusMessage("An error occurred while sending the email");
      setStatusClass("status-message-error");
    }
  };

  return (
    <div className="cf-main">
      <div className="contact-form-container">
        <form className="contact-form">
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
              <Button
                buttonSize={"btn--large"}
                buttonStyle={"btn--primary"}
                onClick={handleSubmit}
              >
                Send The Contact Form <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
          </div>
          {statusMessage && statusClass && (
            <div className={statusClass}>{statusMessage}</div>
          )}
        </form>
        <div className="contact-form-img-container">
          <img
            src="/images/img-contact-form.jpg"
            alt="Support Png vectors by Lovepik.com"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
