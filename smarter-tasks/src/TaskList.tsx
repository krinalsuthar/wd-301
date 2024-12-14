import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (title: string) => void;
}

// interface State {}
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      desc={task.desc}
      dueDate={task.dueDate}
      deleteTask={props.deleteTask}
       />
  ));
  return (
    <>
      <ul>
        <li>{list}</li>
      </ul>
    </>
  );
};
export default TaskList;

