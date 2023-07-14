import Container from '../Container/Container'
import style from  './TaskInput.module.css'
import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react'
import { TaskType } from '../../types/TaskTypes'

function TaskInput ({ tasks, setTasks, type }){
    const [inputValue, setInputValue] = useState()

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if(inputValue){
            const newTask = {
                id: new Date(),
                value: inputValue,
                reationTime: new Date(),
                type: TaskType['TODO']
            }
            const taskParse = JSON.parse(JSON.stringify(tasks))
            taskParse.push(newTask)
            setTasks(taskParse)
            localStorage.setItem('Data', JSON.stringify(taskParse))
            setInputValue('')
        }
    }
    return (
        <Container>
            <div style={{ 
                marginBottom: '12px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <input 
                    type="text" 
                    value={inputValue}
                    placeholder= 'Введите задачу'
                    className={style.task__input} 
                    onChange={inputChangeHandler}
                    typetask={type}
                />
                <button 
                    className={style.input__add__button} 
                    onClick={handleClick} 
                >
                    <IoIosAdd/>
                </button>
            </div>
        </Container>
    )
}

export default TaskInput;