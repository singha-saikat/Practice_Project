import TaskProvider from "../contexts/TaskContexts";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskApp = () => {
  return (
    <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
};

export default TaskApp;
