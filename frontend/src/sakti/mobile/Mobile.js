import React from "react";
import "./Mobile.css";

const Mobile = () => {
  return (
    <>
      <section className="top">
        <h1>Mobile Number</h1>
        <p>Please Enter your valid phone number</p>
        <p>We will send you 4-digit code to verify your account</p>
      </section>
      <section className="in">
        <span>Please enter your phone number</span>
        &nbsp; &nbsp;
        <input type="text" placeholder="+91 000-000-0000" />
      </section>
      <button className="btn">Send OTP</button>
    </>
  );
};

export default Mobile;
