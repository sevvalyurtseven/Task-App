import Task from "../components/Task";
import { getTasksByStatus } from "../utils/utils";
const TaskList = (props) => {
  //destructure
  const { title, tasks, type, changeTaskStatus } = props;

  const tasksToShow = getTasksByStatus(tasks, type);

  return (
    <>
      <div className="tasklist-area">
        <h3>{title}</h3>
        <div className="tasklist-container">
          {tasksToShow.map((task) => (
            <Task
              key={task.id}
              task={task}
              type={type}
              changeTaskStatus={changeTaskStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;
