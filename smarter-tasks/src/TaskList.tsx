import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void;
}
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      task={task}
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

