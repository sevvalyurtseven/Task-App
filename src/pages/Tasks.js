import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import "./Tasks.css";

const Tasks = (props) => {
  //destructure
  const { tasks, allUsers, addTask } = props;
  return (
    <div className="tasks-container">
      <AddTask allUsers={allUsers} addTask={addTask} />
      <TaskList title="Active Tasks" type="incomplete" tasks={tasks} />
      <TaskList title="Completed Tasks" type="completed" tasks={tasks} />
    </div>
  );
};
export default Tasks;
