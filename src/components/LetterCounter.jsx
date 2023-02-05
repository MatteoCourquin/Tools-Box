import { useState } from "react";
import { IconLetterCounter } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

export default function LetterCounter() {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const getNumberOfWords = () => {
    const words = text.split(" ");
    return words.filter((word) => word !== "").length;
  };

  const getNumberOfSentences = () => {
    const sentences = text.split(/[.?!]/);
    return sentences.filter((sentence) => sentence !== "").length;
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools text">
          <div className="title-section">
            <h2>Letter Counter</h2>
            <IconLetterCounter />
          </div>

          <div className="tools">
            <Input
              textarea
              value={text}
              label="Enter your text"
              handleChange={handleChangeText}
              placeholder="Enter your text here..."
            />
          </div>
          <div className="result-container tools">
            <div className="result">
              <p>Letters</p>
              <p className="number-result">{text.length}</p>
            </div>
            <div className="result">
              <p>Words</p>
              <p className="number-result">{getNumberOfWords()}</p>
            </div>
            <div className="result">
              <p>Sentences</p>
              <p className="number-result">{getNumberOfSentences()}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
