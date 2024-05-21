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
  const { task } = props;

  return (
    <div className="task-card">
      <Card className="my-2">
        <CardHeader>{task.deadline}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{task.subject}</CardTitle>
          <CardText>{task.description}</CardText>
          <Button>Complete</Button>
        </CardBody>
        <CardFooter>{task.assignees.join(", ")}</CardFooter>
      </Card>
    </div>
  );
};
export default Task;
