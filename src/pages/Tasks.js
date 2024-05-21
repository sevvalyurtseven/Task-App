import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import "./Tasks.css";

const Tasks = (props) => {
  //destructure
  const { tasks, allUsers } = props;
  return (
    <div className="tasks-container">
      <AddTask allUsers={allUsers} />
      <TaskList title="Active Tasks" type="incompleted" tasks={tasks} />
      <TaskList title="Completed Tasks" type="completed" tasks={tasks} />
    </div>
  );
};
export default Tasks;
