import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TasksGrid from "./components/TasksGrid/TasksGrid";
import { dbtasks } from "./database";
import './global.css'
import { TaskType } from "./types/TaskTypes";

function App() {
  const local = JSON.parse(localStorage.getItem('Data'))
  if (local === "undefined" || local === null) {
    console.log(66);
    localStorage.setItem('Data', JSON.stringify([]))
  }
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Data')))
  useEffect(()=>{
      console.log(tasks)
      console.log("Component did update")
    }, [tasks])


    return (
      <>
        <Header/>
        <TaskInput tasks={tasks} setTasks={setTasks}/>
        <TasksGrid 
          tasks={tasks}
          setTasks={setTasks}
        />
      </>
    )
  
}

export default App;
