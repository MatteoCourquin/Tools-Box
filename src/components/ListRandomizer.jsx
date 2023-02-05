import { useState } from "react";
import { IconListRandomizer } from "./Atoms/Icons";
import Input from "./Atoms/Input";
import Header from "./Header";

function ListRandomizer() {
  const [list, setList] = useState("");

  function changeList(event) {
    setList(event.target.value);
  }

  function handleChangeList() {
    setList(
      list
        .split(",")
        .sort(() => Math.random() - 0.5)
        .join(",")
    );
  }

  return (
    <>
      <Header />
      <section className="section">
        <div className="wrapper-tools code">
          <div className="title-section">
            <h2>List Randomizer</h2>
            <IconListRandomizer />
          </div>
          <div className="tools">
            <Input
              label="Separate items with a comma"
              handleChange={(e) => changeList(e)}
              textarea
              inputId="list"
              placeholder="item1, item2, item3, item4, ..."
              value={list}
              required
              copy
            />

            <button type="submit" className="button" onClick={handleChangeList}>
              Randomize
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListRandomizer