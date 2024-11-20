import React from "react"

interface TaskProps{
    title:string,
    desc:string,
    dueDate:any
}

class Task extends React.Component<TaskProps>{
    render(){
        return(
            <>
            <hr />
            <h3>{this.props.title}</h3>
            <div>Description : {this.props.desc}</div>
            <div>Due Date : {this.props.dueDate}</div>
            <hr />
            </>
        )
    }
}

export default Task