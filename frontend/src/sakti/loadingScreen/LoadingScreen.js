import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <>
      <style>{"body { background-color: #7165e3; }"}</style>
      <div className="center">
        <h1>Shakti</h1>
        <p>Enabling her Dreams </p>
      </div>
      <footer className="footer">
        <span>Powered By</span>
        &nbsp;
        <h1>Dygnify</h1>
      </footer>
    </>
  );
};

export default LoadingScreen;
