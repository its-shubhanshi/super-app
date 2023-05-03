import React, { useState } from "react";
import PencilImg from "../../img/pencil.png";
import "../notesBrowse/notebrowse.css";

const Note = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  console.log(text);
  const handleEditClick = (e, value) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
    console.log("Click");
    console.log(text);
  };
  return (
    <div className="notebox">
      <h3>All Notes</h3>
      <textarea value={text} onChange={(e) => handleEditClick(e)} />
      <button className="edit">
        <img src={PencilImg} alt="pencil" width={35} />
      </button>
    </div>
  );
};

export default Note;
