import { useState } from "react";
import { IconJsonViewer } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

function JsonViewerComponent() {
  const [json, setJson] = useState("");

  const isValidJson = (json) => {
    try {
      JSON.parse(json);
    } catch (e) {
      return false;
    }
    return true;
  }

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools code">
          <div className="title-section">
            <h2>White Space Remover</h2>
            <IconJsonViewer />
          </div>
          <div className="tools">

            <Input
              label="Enter your Json"
              inputId="text"
              value={json}
              textarea
              placeholder={`{
  "name": "John",
  "age": 30,
}
              `}
              handleChange={(e) => { setJson(e.target.value) }}
            />
            {json && !isValidJson(json) && <p className="error-message">Please enter a valid JSON</p>}
            {isValidJson(json) && json &&
              <Input
                inputId="text"
                value={JSON.parse(json)}
                json
                copy
                handleChange={() => { setJson(event.target.value) }}
              />
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default JsonViewerComponent;
