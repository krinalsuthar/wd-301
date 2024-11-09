import React from "react";

interface Taskprop{
  title : string
  desc:string
  date:any
}

class Task extends React.Component<Taskprop>{
  render(){
    return(
      <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{this.props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date:{this.props.date}
      </p>
      <p className="text-sm text-slate-500">
        Description: {this.props.desc}
      </p>
    </div>
    )
  }
}
export default Task;