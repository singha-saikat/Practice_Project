import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {initialTasks } from '../assets/data/data'
import { useReducer} from "react";
import taskReducer from "./Reducer";

const TaskApp = () => {
    const [tasks,dispatch] = useReducer(taskReducer,initialTasks)
    const getNextId = (data) => {
        const maxId = data.reduce((prev,cur) => Math.max(prev,cur.id),0);
        return maxId + 1;
    }

    const handleAddTask = (text) =>{
        dispatch({
            type: 'added',
            text,
            id:getNextId(tasks)
        });
    }
    const handleChangeTask = (task) => {
        dispatch({
            type:'changed',
            task,
        })
    };
    const hadleDelete =(id) => {
        dispatch({
            type:'deleted',
            id 
        })
    }
      return (
        <>
          <h1>Prague itinerary</h1>
          <AddTask onAdd={handleAddTask}/>
          <TaskList tasks={tasks} onDelete={hadleDelete} onChange={handleChangeTask}/>          
        </>
      );
};

export default TaskApp;
