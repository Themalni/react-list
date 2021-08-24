import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

interface Task {
    id: number;
    text: string;
}

let localTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || '') || [];

class TasksStore extends EventEmitter {

    getAllTasks() {
        return localTasks.length > 0 ? JSON.parse(localStorage.getItem("tasks") || '') : [];
    }

    addTask(task: Task) {
        localTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(localTasks));

        this.emit("change");
    }

    deleteTask(id: number) {
        const localTaskIndex = localTasks.findIndex((taskId) => taskId.id === id);
        localTasks.splice(localTaskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(localTasks));

        this.emit("change");
    }

    handleActions = (payload) => {
        switch(payload.type) {
            case "ADD_TASK": {
                this.addTask(payload.task);
                break;
            }
            case "DELETE_TASK": {
                this.deleteTask(payload.id);
                break;
            }
            default:
        }
    }
}

const tasksStore = new TasksStore();
dispatcher.register(tasksStore.handleActions.bind(tasksStore));

export default tasksStore;