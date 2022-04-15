import React from "react";
import "./VerifyNumber.css";

const VerifyNumber = () => {
  return (
    <>
      <section className="top">
        <h1>Verify Account</h1>
        <p>Enter 4-digit Code we have sent to at +91 000 000 0000</p>
      </section>
      <section className="code">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </section>
    </>
  );
};

export default VerifyNumber;
