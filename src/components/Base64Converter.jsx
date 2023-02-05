import Header from "./Header";
import { useState } from "react";
import Input from "./Atoms/Input";
import { IconBase64Converter } from "./Atoms/Icons";

function Base64Converter() {
  const [text, setText] = useState("");

  const utf8_to_b64 = () => {
    setText(window.btoa(unescape(encodeURIComponent(text))));
  };

  const b64_to_utf8 = () => {
    setText(decodeURIComponent(escape(window.atob(text))));
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools security">
          <div className="title-section">
            <h2>Base 64 Encoder/Decoder</h2>
            <IconBase64Converter />
          </div>
          <div className="tools">
            <Input
              label="Enter your text"
              placeholder="Enter your text here..."
              textarea
              copy
              inputId="text"
              value={text}
              handleChange={() => {
                setText(event.target.value);
              }}
            />
            <div className="format-button-section-grid">
              <button
                type="submit"
                className="button"
                onClick={() => utf8_to_b64()}
              >
                Encode
              </button>
              <button
                type="submit"
                className="button"
                onClick={() => b64_to_utf8()}
              >
                Decode
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Base64Converter;
