import { useEffect, useState } from "react";
import { IconPassword } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [lengthPassword, setLengthPassword] = useState(12);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);

  const charset = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "012345678901234567890123456789",
    symbols: "+*#&@!%?+*#&@!%?+*#&@!%?",
  };

  const generatePassword = () => {
    let valuePassword = "";
    if (!numbers && !symbols && !uppercase && !lowercase) {
      valuePassword = charset.lowercase;
    }
    if (numbers) {
      valuePassword += charset.numbers;
    }
    if (symbols) {
      valuePassword += charset.symbols;
    }
    if (uppercase) {
      valuePassword += charset.uppercase;
    }
    if (lowercase) {
      valuePassword += charset.lowercase;
    }
    setPassword(shuffleChars(valuePassword));
  };

  const shuffleChars = (valuePassword) => {
    let chars = valuePassword.split("");
    let shuffledChars = "";
    while (chars.length > 0) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      shuffledChars += chars.splice(randomIndex, 1);
      shuffledChars = shuffledChars.slice(0, lengthPassword);
    }
    return shuffledChars;
  };

  useEffect(() => {
    generatePassword();
  }, [lengthPassword, numbers, symbols, uppercase, lowercase]);

  useEffect(() => {
    if (!numbers && !symbols && !uppercase) {
      checkboxLetters.checked = true;
    }
  }, [generatePassword]);

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools security">
          <div className="title-section">
            <h2>Password Generator</h2>
            <IconPassword />
          </div>

          <div className="tools passsword-generator">
            <Input
              type="text"
              value={password}
              copy
              input
              disabled="disabled"
            />

            <Input
              label={"Length " + lengthPassword}
              input
              type="range"
              min="6"
              max="18"
              value={lengthPassword}
              handleChange={(e) => {
                setLengthPassword(e.target.value);
              }}
            />

            <div className="wrapper-toggle">
              <div className="input-toggle">
                <label className="label">Numbers</label>
                <label className="toggle">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setNumbers(e.target.checked);
                      generatePassword();
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="input-toggle">
                <label className="label">Symbols</label>
                <label className="toggle">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setSymbols(e.target.checked);
                      generatePassword();
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="input-toggle">
                <label className="label">Uppercase</label>
                <label className="toggle">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setUppercase(e.target.checked);
                      generatePassword();
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="input-toggle">
                <label className="label">Letters</label>
                <label className="toggle">
                  <input
                    type="checkbox"
                    id="checkboxLetters"
                    onClick={(e) => {
                      setLowercase(e.target.checked);
                      generatePassword();
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            <button
              onClick={generatePassword}
              className="button"
            >
              Generate Password
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PasswordGenerator;
