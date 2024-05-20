const TaskList = (props) => {
  //destructure
  const { title, tasks, type } = props;
  return (
    <>
      <div className="tasklist-area">
        <h2>{title}</h2>
        <div className="tasklist-container"></div>
      </div>
    </>
  );
};
export default TaskList;
