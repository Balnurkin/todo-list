import style from './TaskBox.module.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { LiaTrashAltSolid } from 'react-icons/lia'
import { TaskType } from '../../types/TaskTypes'
import { useState } from 'react'

function TaskBox ({ tasks, value, id, setTasks, type }){

    const nextGridItem = (e) => {
        const clone = JSON.parse(JSON.stringify(tasks))
        const targetId = e.currentTarget.dataset.id
        const foundElIndex = clone.findIndex(el => el.id == targetId)
        console.log(foundElIndex)
        clone[foundElIndex].type = TaskType['PROGRESS']
        setTasks(clone)
        localStorage.setItem('Data', JSON.stringify(clone))
    }

    const [isChecked, setIsChecked] = useState(false)

    const checkbox = (e) =>{
        const clone = JSON.parse(JSON.stringify(tasks))
        const targetId = e.currentTarget.dataset.id
        const foundElIndex = clone.findIndex(el => el.id == targetId)
        console.log(foundElIndex)
        clone[foundElIndex].type = TaskType['FINISHED']
        setTasks(clone)
        setIsChecked(!isChecked)
        localStorage.setItem('Data', JSON.stringify(clone))
    }

    const deleteButton = (e) => {
        const targetId = e.currentTarget.dataset.id
        setTasks(currVal => {
            const del = currVal.filter(task => task.id !== targetId)
            localStorage.setItem('Data', JSON.stringify(del))
            return del
        })
    }

    return (
        <div className={style.task__box}>
            <div>
                {value}
            </div>

            {type === TaskType['TODO'] && 
                <button data-id={id} onClick={nextGridItem} className={style.input__add__button}>
                    <HiArrowSmRight/>
                </button>
            }
            {type === TaskType['PROGRESS'] && 
                <input type='checkbox' data-id={id} onChange={checkbox} checked={isChecked} className={style.input__checkbox}>
                </input>
            }

            <button data-id={id} onClick={deleteButton} className={style.input__delete__button}>
                <LiaTrashAltSolid/>
            </button>
        </div>
    )
}

export default TaskBox;