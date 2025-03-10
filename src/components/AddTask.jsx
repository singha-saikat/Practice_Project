import {  useState } from "react";
import { useTaskDispatch, useTasks } from "../contexts/TaskContexts";
import { getNextId } from "../utils/getNextId";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  const tasks = useTasks();
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
            dispatch({
              type: 'added',
              text,
              id:getNextId(tasks)
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
