/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
