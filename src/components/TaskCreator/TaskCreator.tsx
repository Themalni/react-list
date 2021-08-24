import React from 'react';
import './TaskCreator.css';
import { addTask } from '../../actions/TaskActions';

interface TaskCreatorProps {

}

interface TaskCreatorState {
    text: string
}

class TaskCreator extends React.Component<TaskCreatorProps, TaskCreatorState> {
    constructor(props: object) {
        super(props);
        this.state = {
            text: ''
        };
    };

    onChange = (e: { target: HTMLInputElement; }) => {
        this.setState({ text: e.target.value });
    }

    addNewTask = () => {
        if(this.state.text.length === 0) {
            return;
        }

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
                <button className={`form-button ${this.state.text.length === 0 ? "disabled-btn": ""}`} onClick={this.addNewTask.bind(this)} disabled={this.state.text.length === 0}>Add</button>
            </div>
        )
    }
}

export default TaskCreator;