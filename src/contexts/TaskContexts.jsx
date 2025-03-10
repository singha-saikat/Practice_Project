/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../components/Reducer";
import { initialTasks } from "../../public/initialData";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function useTasks(){
    return useContext(TasksContext)
}
export function useTaskDispatch(){
    return useContext(TasksDispatchContext)
}

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
