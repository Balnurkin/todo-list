import { TaskType } from "./types/TaskTypes";

export const dbtasks = [
    {
        id: 1,
        value: 'New task',
        reationTime: new Date(),
        type: TaskType['TODO']
    },
    {
        id: 2,
        value: 'Task in progress',
        reationTime: new Date(),
        type: TaskType['PROGRESS']
    },
    {
        id: 3,
        value: 'One more task to do',
        reationTime: new Date(),
        type: TaskType['TODO']
    }
]