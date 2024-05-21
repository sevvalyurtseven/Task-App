import Task from "../components/Task";
const TaskList = (props) => {
  //destructure
  const { title, tasks, type } = props;
  return (
    <>
      <div className="tasklist-area">
        <h3>{title}</h3>
        <div className="tasklist-container">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <Task task={task} type={type} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;
