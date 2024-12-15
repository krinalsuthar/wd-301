import { TaskItem } from "./types";

interface TaskProps {
  task: TaskItem;
  deleteTask: (task: TaskItem) => void; 
}

const Task = (props: TaskProps) => {
  const { task, deleteTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${task.id || ""}`}>
            <h2 className="text-base font-bold my-1">{task.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{task.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {task.desc}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => deleteTask(task)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
