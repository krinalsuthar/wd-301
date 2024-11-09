// import { TaskItem } from "./types";
// import React from "react";
// import Task from "./Task";
// interface Props {
//   tasks: TaskItem[];
// }
// // interface TaskItem {
// //   title: string;
// // }
// interface State {}
// class TaskList extends React.Component<Props, State> {
  
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} />
//     ));
//   }
// }
// export default TaskList; 

import { TaskItem } from "./types";
import React from "react";
import Task from "./Task";

interface Props {
  tasks: TaskItem[];
}

interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, idx) => (
          <Task key={idx} title={task.title} desc={task.desc} date={task.date} />
        ))}
      </div>
    );
  }
}

export default TaskList;