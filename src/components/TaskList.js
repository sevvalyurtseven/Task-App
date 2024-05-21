const TaskList = (props) => {
  //destructure
  const { title, tasks, type } = props;
  return (
    <>
      <div className="tasklist-area">
        <h3>{title}</h3>
        <div className="tasklist-container"></div>
      </div>
    </>
  );
};
export default TaskList;
