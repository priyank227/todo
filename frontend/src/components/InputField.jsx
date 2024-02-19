import React, { useState } from "react";

const InputField = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          {props.labelTitle}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name={props.name}
          id={props.id}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputField;
