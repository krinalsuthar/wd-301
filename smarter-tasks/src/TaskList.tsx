import React from "react"
import Task from "./Task"
import {TaskItem}  from "./types";

interface Props {
  tasks: TaskItem[];
}

interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return (
      <>
      <div>
        {this.props.tasks.map((task, idx) => (
          <Task key={idx} title={task.title} desc={task.desc} dueDate={task.dueDate} />
        ))}
      </div>
      </>
    );
  }
}
export default TaskList