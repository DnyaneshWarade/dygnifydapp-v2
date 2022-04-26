import React from "react";
import "./LocationPermission.css";

const LocationPermission = () => {
  return (
    <>
      <section className="top">
        <h2>Location Permission</h2>
        <p>Provide Access to your location for better service</p>
      </section>
      <div className="image">
        <img src="./location.png" alt="" />
      </div>
      <section className="buttonlp">
        <input className="btn" type="button" value="Maybe Later" />
        <input className="btn" type="button" value="Allow" />
      </section>
    </>
  );
};

export default LocationPermission;
