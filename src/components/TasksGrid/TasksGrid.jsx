import { TaskType } from "../../types/TaskTypes";
import Container from "../Container/Container";
import TasksGridItem from "../TasksGridItem/TasksGridItem";
import style from './TasksGrid.module.css'

const listTypes = [
    {name:'Tasks to do', type: TaskType['TODO']},
    {name: 'Tasks in progress', type: TaskType['PROGRESS']},
    {name: 'Completed tasks', type: TaskType['FINISHED']}
]

function TasksGrid ({ tasks, setTasks }){
    return (
        <Container>
            <div className={style.tasks__grid}>
                {listTypes.map(el => {
                    return (
                        <TasksGridItem
                            tasks={tasks} 
                            key={el.name} 
                            name={el.name}
                            type={el.type}
                            setTasks={setTasks}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default TasksGrid;