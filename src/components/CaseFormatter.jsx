import { useState } from "react";
import { IconArrow, IconCaseFormatter } from './Atoms/Icons';
import Input from "./Atoms/Input";
import Header from "./Header";

function CaseFormatter() {
  const [text, formatText] = useState("");

  const handleTextChange = (event) => {
    formatText(event.target.value);
  };

  const changeToUppercase = () => {
    formatText(text.toUpperCase());
  };

  const changeToLowerCase = () => {
    formatText(text.toLowerCase());
  };

  const changeToTitleCase = () => {
    const array = text.split(" ");

    for (let i = 0; i < text.length; i++) {
      if (array[i]) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
      }
    }

    formatText(array.join(" "));
  };

  const changeToSentenceCase = () => {
    const array = text.split(". ");

    for (let i = 0; i < text.length; i++) {
      if (array[i]) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
      }
    }

    formatText(array.join(". "));
  };

  const changeToSpaceToHyphen = () => {
    const array = text.split(" ");

    for (let i = 0; i < text.length; i++) {
      if (array[i]) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
      }
    }

    formatText(array.join("-"));
  };

  const changeToHyphenToSpace = () => {
    const array = text.split("-");

    for (let i = 0; i < text.length; i++) {
      if (array[i]) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
      }
    }

    formatText(array.join(" "));
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools text">
          <div className="title-section">
            <h2>Case Formatter</h2>
            <IconCaseFormatter />
          </div>
          <div className="tools">
            <Input
              label="Enter your text"
              textarea
              copy
              inputId="text"
              placeholder="Enter your text here..."
              value={text}
              handleChange={handleTextChange}
            />
            <p className="section-title label">Change my text to...</p>
            <div className="format-button-section">
              <button
                onClick={changeToUppercase}
                className="button format-button"
              >
                UPPERCASE
              </button>
              <button
                onClick={changeToLowerCase}
                className="button format-button"
              >
                lowercase
              </button>
              <button
                onClick={changeToTitleCase}
                className="button format-button"
              >
                Title Case
              </button>
              <button
                onClick={changeToSentenceCase}
                className="button format-button"
              >
                Sentence case
              </button>
              <button
                onClick={changeToSpaceToHyphen}
                className="button format-button"
              >
                Space <IconArrow /> Hyphen
              </button>
              <button
                onClick={changeToHyphenToSpace}
                className="button format-button"
              >
                Hyphen <IconArrow /> Space
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseFormatter;
