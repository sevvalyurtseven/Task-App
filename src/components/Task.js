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
      <Card className="my-2" style={{ width: "18rem" }}>
        <CardHeader>{task.deadline}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{task.subject}</CardTitle>
          <CardText>{task.description}</CardText>
          <Button>Complete</Button>
        </CardBody>
        <CardFooter>
          {task.assignees.map((item) => (
            <span key={item.id}> {item}</span>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};
export default Task;
