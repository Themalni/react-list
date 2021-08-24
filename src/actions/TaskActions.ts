import { ADD_TASK, DELETE_TASK } from "./Types";
import dispatcher from "../dispatcher";


export function addTask(task: object) {
    dispatcher.dispatch({
        type: ADD_TASK,
        task
    })
}

export function deleteTask(id: number) {
    dispatcher.dispatch({
        type: DELETE_TASK,
        id
    })
}