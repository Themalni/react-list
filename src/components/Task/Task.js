import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { deleteTask } from '../../actions/TaskActions';

class Task extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render () {
        return (
            <div className="task">
                <span>{this.props.task.text}</span>
                <button className="btn-delete" onClick={() => deleteTask(this.props.task.id)}>X</button>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object
}

export default Task;