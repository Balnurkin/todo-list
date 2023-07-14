import TaskBox from '../TaskBox/TaskBox';
import style from './TasksGridItem.module.css'

function TasksGridItem ({ name, tasks, type, setTasks }){
    return (
        <div className={style.tasks__grid__item}> 
            <div className={style.tasks__header}>
                {name}
            </div>

            <div style={{ 
                marginTop: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center" 
            }}>
                {/* {tasks.map(task => {
                    return (
                        task.type === type && <TaskBox 
                        key={task.id}
                        value={task.value}
                    />
                    )
                })} */}
                {tasks
                .filter(task => task.type === type)
                .map(task => {
                    return (
                        <TaskBox 
                        key={task.id}
                        value={task.value}
                        id={task.id}
                        setTasks={setTasks}
                        tasks={tasks}
                        type={type}
                        />
                    )
                })
                }
            </div>
            
        </div>
    )
}

export default TasksGridItem;