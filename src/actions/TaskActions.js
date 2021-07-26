import { ADD_TASK, DELETE_TASK } from "./Types";
import dispatcher from "../dispatcher";

export function addTask(task) {
    dispatcher.dispatch({
        type: ADD_TASK,
        task
    })
}

export function deleteTask(id) {
    dispatcher.dispatch({
        type: DELETE_TASK,
        id
    })
}