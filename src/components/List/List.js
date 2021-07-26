import React, { Component } from 'react';
import './List.css';
import Task from '../Task/Task';
import TasksStore from '../../store/TasksStore';

class List extends Component {
    constructor() {
        super();
        this.state = {
            tasks: TasksStore.getAllTasks()
        };
    };

    componentDidMount() {
        TasksStore.on("change", () => {
            this.setState({
                tasks: TasksStore.getAllTasks()
            })
        })
    }

    render () {

        const TasksComponents = this.state.tasks.map((task) => {
            return <Task key={task.id}  task={task} />
        })

        return (
            <div className="list">
                {TasksComponents}
                {this.state.tasks.length === 0 ? <span className="message">Your have no tasks</span> : null}
            </div>
        )
    }
}

export default List;