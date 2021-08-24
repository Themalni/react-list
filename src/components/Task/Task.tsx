import React, { PropsWithChildren } from 'react';
import './Task.css';
import { deleteTask } from '../../actions/TaskActions';

export interface TaskProps {
    text: string,
    id: number
}

const Task = (props: PropsWithChildren<TaskProps>) => {

    return (
        <div className="task">
            <span>{props.text}</span>
            <button className="btn-delete" onClick={() => deleteTask(props.id)}>X</button>
            {props.children}
        </div>
    )
}


export default Task;