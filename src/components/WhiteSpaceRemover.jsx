import { useState } from "react";
import { IconRemoveSpace } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

export default function WhiteSpaceRemover() {
  const [text, setText] = useState("");

  const handleSpace = (event) => {
    setText(event.target.value);
  };

  const removeSapce = () => {
    setText(text.replace(/\s\s+/g, " "));
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools text">
          <div className="title-section">
            <h2>White Space Remover</h2>
            <IconRemoveSpace />
          </div>

          <div className="tools passsword-generator">
            <Input
              textarea
              label="Enter your text"
              placeholder="Enter your text here..."
              value={text}
              handleChange={handleSpace}
              copy
            />
            <button className="button" onClick={() => removeSapce()}>
              Remove White Space
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
