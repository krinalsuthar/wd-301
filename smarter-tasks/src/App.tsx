import TaskList from "./TaskList";
import TaskApp from "./TaskApp";

function App() {
  return (
    <div className="App">
     <TaskList tasks={[]}/>
      <TaskApp/>
    </div>
  );
}
export default App