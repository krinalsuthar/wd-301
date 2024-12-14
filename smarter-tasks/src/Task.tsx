import { TaskItem } from "./types";

// interface TaskProps{
//     title:string,
//     desc:string,
//     dueDate:any
// }

interface TaskProps extends TaskItem {
  deleteTask: (title: string) => void; // Add deleteTask prop
}

const TaskFC = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100 text-center">
      <h2 className="text-base font-bold my-1">{props.title}<button
        className="deleteTaskButton mt-4 float-end pr-3"
        onClick={() => props.deleteTask(props.title)} // Call deleteTask on click
      >
        <i className="fa-solid fa-trash fa-lg "></i>
      </button></h2>
      <p className="text-sm text-slate-500">Description: {props.desc}</p>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
    </div>
  );
};


export default TaskFC;
