import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  CardFooter,
  Button,
} from "reactstrap";
import { getStatusText } from "../utils/utils";

const Task = (props) => {
  const { task, changeTaskStatus } = props;

  const statusTexts = getStatusText(task.status); // {textToShow, textToSet}

  const handleStatusChange = () => {
    changeTaskStatus(task, statusTexts.textToSet);
  };

  return (
    <div className="task-card">
      <Card data-cy={`${task.status}-task`} className="my-2">
        <CardHeader>{task.deadline}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{task.subject}</CardTitle>
          <CardText>{task.description}</CardText>
          <Button color={statusTexts.color} onClick={handleStatusChange}>
            {statusTexts.textToShow}
          </Button>
        </CardBody>
        <CardFooter>{task.assignees.join(", ")}</CardFooter>
      </Card>
    </div>
  );
};
export default Task;
