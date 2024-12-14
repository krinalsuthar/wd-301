import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
React.useState<TaskAppState>;
// import TaskList from "./taskList";

// interface TaskAppProps {}
interface TaskAppState {
  tasks: TaskItem[];
}


const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (title: string) => {
    const updatedTasks = taskAppState.tasks.filter(task => task.title !== title);
    setTaskAppState({ tasks: updatedTasks });
  };
  
  // React.useEffect(() => {
  //   // This is correct usage
  //     const saveTasks = async () => {
  //       const token = await saveTasksToBackend(taskAppState.tasks);
  //     }
  //     saveTasks();
  //     return () => {
  //       cancelAPI(token);
  //     };
  //   }, [taskAppState.tasks]);
  return (
    <div className="container py-10 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
