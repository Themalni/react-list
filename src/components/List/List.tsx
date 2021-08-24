import React from 'react';
import './List.css';
import Task from '../Task/Task';
import TasksStore from '../../store/TasksStore';



interface ListState {
    tasks: Array<any>
}

interface ListProps {

}

class List extends React.Component<ListProps, ListState> {
    constructor(props: object) {
        super(props);
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
            return <Task key={task.id}  text={task.text} id={task.id}/>
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