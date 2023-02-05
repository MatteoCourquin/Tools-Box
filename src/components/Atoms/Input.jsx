import { useEffect, useState } from "react";
import { IconCopy } from "./Icons";
import ReactJson from 'react-json-view'

const Input = ({
  label,
  placeholder,
  value,
  type = "text",
  textarea,
  name,
  min,
  max,
  step,
  handleChange,
  inputId,
  input,
  json,
  copy,
  disabled,
  required
}) => {
  let [textCopied, setTextCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(!json ? value : JSON.stringify(value))
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 3000);
  };

  return (
    <div className="content-input">
      {label && <label className="elem-label label">{label}</label>}

      {json &&
        <div className="text-area format-text-area-section json-viewer">
          <ReactJson name="JSON" src={value} />
          {copy && (
            <>
              <div onClick={copyToClipboard}>
                <IconCopy />
              </div>
              {textCopied && <p className="bubble">Text copied to clipboard</p>}
            </>
          )}
        </div>}

      {textarea && (
        <div
          className={`text-area format-text-area-section ${textarea ? "height-area" : "height-input"
            }`}
        >
          <textarea
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            required={required}
          />
          {copy && (
            <>
              <div onClick={copyToClipboard}>
                <IconCopy />
              </div>
              {textCopied && <p className="bubble">Text copied to clipboard</p>}
            </>
          )}
        </div>
      )}

      {input && (
        <div className={`${type != "range" && "text-area"}`}>
          <input
            id={inputId}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            type={type}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            required={required}
          />
          {copy && (
            <>
              <div onClick={copyToClipboard}>
                <IconCopy />
              </div>
              {textCopied && <p className="bubble">Text copied to clipboard</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;