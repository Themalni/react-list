import React, { Component } from 'react';
import './TaskCreator.css';
import { addTask } from '../../actions/TaskActions';

class TaskCreator extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    };

    onChange = (e) => {
        this.setState({ text: e.target.value });
    }

    addNewTask = () => {
        let newTask = {
            id: Math.floor(Math.random() * 100),
            text: this.state.text
        };

        addTask(newTask);
        this.setState({ text: '' });
    }

    render () {
        return (
            <div className="task-creator-container">
                <input
                    type="text"
                    placeholder="Enter task name"
                    name="task"
                    className="form-input"
                    onChange={this.onChange}
                    value={this.state.text}
                    onKeyPress={event => event.key === 'Enter' && this.addNewTask()}
                />
                <button className="form-button" onClick={this.addNewTask.bind(this)}>Add</button>
            </div>
        )
    }
}

export default TaskCreator;