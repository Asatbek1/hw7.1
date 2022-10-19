import React, { useState } from "react";
import "./Inputs.css";
const Inputs = () => {
  const [value1, setValue1] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="Inputs">
      <input type="text" value="text" />
      <input
        type="text"
        value={value1}
        onChange={(event) => setValue1(event.target.value)}
      />

      <form >
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Inputs;
