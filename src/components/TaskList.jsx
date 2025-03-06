/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({tasks,onDelete,onChange}) => {
  return (
    <div>
      <ul>
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onChange={onChange}/>)}
      </ul>
    </div>
  );
};

export default TaskList;
