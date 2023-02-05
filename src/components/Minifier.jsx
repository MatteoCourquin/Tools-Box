import { useState } from "react";
import { IconMinifier } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

function Minifier() {
  const [text, setText] = useState("");

  const mimify = () => {
    let text = document.getElementById("text").value;
    setText(text.replace(/\s/g, ""));
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools code">
          <div className="title-section">
            <h2>Minifier JS / CSS</h2>
            <IconMinifier />
          </div>
          <div className="tools">
            <div className="tools">
              <Input
                label="Enter your text"
                textarea
                copy
                inputId="text"
                value={text}
                placeholder={`.class {
  color: red;
}
                `}
                handleChange={() => {
                  setText(event.target.value);
                }}
              />
              <button type="submit" className="button" onClick={() => mimify()}>
                Mimify
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Minifier;
