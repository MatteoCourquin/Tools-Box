import { useState } from "react";
import { IconArrow, IconColorConverter } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

export default function ColorConverter() {
  const [colorHex, setColorHex] = useState("#D0C1FF");
  const [colorRgb, setColorRgb] = useState("");

  function changeColor(event) {
    setColorHex(event.target.value.replace(/[^#a-fA-F0-9]/g, ""));
  }

  function handleChangeHex() {
    setColorRgb(hexToRgb(colorHex));
  }

  const isValidHex = () => colorHex === "" || 5 <= colorHex.length && 9 >= colorHex.length ? true : false;

  function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools design">
          <div className="title-section">
            <h2>Color Converter</h2>
            <IconColorConverter />
          </div>
          <div className="tools">
            <div className="color-container">
              <Input
                label="Hex"
                handleChange={(e) => changeColor(e)}
                type="text"
                input
                inputId="colorHex"
                placeholder="#000000"
                value={colorHex}
                required
              />
              {!isValidHex() && (
                <p className="alertMessage">Please enter a valid hex value</p>
              )}

              <button
                type="submit"
                className="button button-color-converter"
                onClick={handleChangeHex}
              >
                <IconArrow />
                Convert to RGB
                <IconArrow />
              </button>

              <Input
                label="RGB"
                type="text"
                value={colorRgb}
                placeholder="rgb(0, 0, 0)"
                copy
                input
              />
            </div>

            <div
              className="color-box text-area"
              style={{ backgroundColor: colorHex }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
