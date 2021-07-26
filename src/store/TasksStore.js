import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TasksStore extends EventEmitter {

    getAllTasks() {
        const localTasks = localStorage.getItem("tasks") || [];
        return localTasks.length > 0 ? JSON.parse(localTasks) : localTasks;
    }

    addTask(task) {
        const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        localTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(localTasks));

        this.emit("change");
    }

    deleteTask(id) {
        const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const localTaskIndex = localTasks.findIndex(taskId => taskId.id === id);
        localTasks.splice(localTaskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(localTasks));

        this.emit("change");
    }

    handleActions = (action) => {
        switch(action.type) {
            case "ADD_TASK": {
                this.addTask(action.task);
                break;
            }
            case "DELETE_TASK": {
                this.deleteTask(action.id);
                break;
            }
            default:
        }
    }
}

const tasksStore = new TasksStore();
dispatcher.register(tasksStore.handleActions.bind(tasksStore));

export default tasksStore;