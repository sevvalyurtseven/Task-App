import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  CardFooter,
  Button,
} from "reactstrap";

const Task = (props) => {
  const { task, changeTaskStatus } = props;

  const handleStatusChange = () => {
    const status = task.status === "incomplete" ? "completed" : "incomplete";
    changeTaskStatus(task, status);
  };

  return (
    <div className="task-card">
      <Card className="my-2">
        <CardHeader>{task.deadline}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{task.subject}</CardTitle>
          <CardText>{task.description}</CardText>
          <Button color="primary" onClick={handleStatusChange}>
            {task.status === "incomplete" ? "Complete" : "Incomplete"}
          </Button>
        </CardBody>
        <CardFooter>{task.assignees.join(", ")}</CardFooter>
      </Card>
    </div>
  );
};
export default Task;
