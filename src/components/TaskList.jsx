import Task from "./Task";
import { useTasks } from "../contexts/TaskContexts";

const TaskList = () => {
  const tasks = useTasks()
  return (
    <div>
      <ul>
        {tasks.map(task => <Task key={task.id} task={task}/>)}
      </ul>
    </div>
  );
};

export default TaskList;
