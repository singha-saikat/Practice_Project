/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TasksDispatchContext } from "../contexts/TaskContexts";

const Task = ({ task }) => {
  const [isEdting, setIsEdting] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEdting) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEdting(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdting(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
};

export default Task;
