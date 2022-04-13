import React from "react";
import "./ChooseLanguage.css";

const ChooseLanguage = () => {
  return (
    <>
      <section className="top">
        <h1>Choose Language</h1>
        <p>You can always change language from profile settings later.</p>
      </section>
      <section className="lang">
        <div className="row">
          <div className="box">
            <button>
              <img src="./hindiLetter.png" alt="" />
              <p>Hindi</p>
            </button>
          </div>
          <div className="box">
            <button>
              <img src="./englishLetter.png" alt="" />
              <p>English</p>
            </button>
          </div>
          <div className="box">
            <button>
              <img src="./odiaLetter.png" alt="" />
              <p>Odia</p>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <button>
              <img src="kannadaLetter.png" alt="" />
              <p>Kannada</p>
            </button>
          </div>
          <div className="box">
            <button>
              <img src="tamilLetter.png" alt="" />
              <p>Tamil</p>
            </button>
          </div>
          <div className="box">
            <button>
              <img src="./bengaliLetter.png" alt="" />
              <p>Bengali</p>
            </button>
          </div>
        </div>
      </section>
      <div className="btn">
        <input type="button" value="Continue" />
      </div>
    </>
  );
};

export default ChooseLanguage;
