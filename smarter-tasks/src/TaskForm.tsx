// import React from "react";
// import { TaskItem } from "./types";
// interface TaskFormProps {
//   addTask: (task: TaskItem) => void;
// }

// interface TaskFormState {
//   title: string;
//   desc:string
// }
// // interface TaskFormState {
// // }
// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       desc:""
//     }
//   }
  
//   inputRef = React.createRef<HTMLInputElement>();
//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const newTask = {
//       title: this.state.title,
//       desc:this.state.desc
//     };
//     this.props.addTask(newTask);
//     this.setState({ title: "",desc:"" });
//   };

//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({ title: event.target.value });
//   };
//   render(){
//     return (
//         <form className="mt-10" onSubmit={this.addTask}>
//         <input type="text" value={this.state.title} className="ms-10 border-2 rounded-md border-indigo-500/75" onChange={this.titleChanged}/>
//         <button type="submit" className="ms-10 border-2 rounded-md border-indigo-500/75 bg-indigo-500">Add item</button>
//       </form>
//     )
//   }
// }
//  export default TaskForm;

import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  desc: string;
  date:any
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      date:new Date()
    };
  }

  inputRef = React.createRef<HTMLInputElement>();

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      desc: this.state.desc,
      date:this.state.date
    };
    this.props.addTask(newTask);
    this.setState({ title: "", desc: "",date:new Date() });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descChanged: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ desc: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ date: event.target.value });
  };

  render() {
    return (
      <form className="mt-10" onSubmit={this.addTask}>
        <input
          type="text"
          id="todoTitle"
          value={this.state.title}
          className="ms-10 border-2 rounded-md border-indigo-500/75"
          onChange={this.titleChanged}
          placeholder="Task Title"
          required
        />
        <textarea
          value={this.state.desc}
          className="ms-10 border-2 rounded-md border-indigo-500/75"
          onChange={this.descChanged}
          placeholder="Task Description"
          rows={4}
          required // Set the number of visible rows for the textarea
        />
         <br />
        <input type="date" 
        id="todoDueDate"
        value={this.state.date}
        className="ms-10 border-2 rounded-md border-indigo-500/75"
        onChange={this.dateChanged}
        placeholder="Task Title"
        required
        />
        <button type="submit" id="addTaskButton" className="ms-10 border-2 rounded-md border-indigo-500/75 bg-indigo-500">
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;