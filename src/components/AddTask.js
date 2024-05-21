import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { fullName } from "../utils/utils";

const d = new Date();
const initialValues = {
  subject: "",
  description: "",
  deadline: d.toISOString().slice(0, 10),
  assignees: [],
  status: "incomplete",
};

const initialErrors = {
  subject: "",
  description: "",
  deadline: "",
  assignees: "",
  status: "",
};

const AddTask = (props) => {
  const { allUsers } = props;

  const [taskFormData, setTaskFormData] = useState(initialValues);

  // 1. adım: Formdaki errorleri tutmak icin bir state olustur
  const [errors, setErrors] = useState(initialErrors);

  // 2. adım: Formun valid olup olmadigini kontrol etmek icin bir state olustur
  const [isValid, setIsValid] = useState(false);

  // 3. adım: Form şemasını olustur
  const taskSchema = {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, checked, value, type } = event.target;
    const updatedTaskForm = { ...taskFormData };
    if (type === "checkbox") {
      if (checked) {
        updatedTaskForm.assignees.push(name);
      } else {
        const index = updatedTaskForm.assignees.indexOf(name);
        updatedTaskForm.assignees.splice(index, 1);
      }
    } else {
      updatedTaskForm[name] = value;
    }
    console.log(updatedTaskForm);
    setTaskFormData(updatedTaskForm);
  };

  return (
    <div className="add-task-container">
      <h3>AddTask Area</h3>
      <Form className="task-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What is the subject of the task?"
            type="text"
            value={taskFormData.subject}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Describe the details of the task"
            type="textarea"
            value={taskFormData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={taskFormData.deadline}
            onChange={handleChange}
          />
        </FormGroup>
        <div className="assignees-container">
          {allUsers.map((user) => (
            <FormGroup key={fullName(user)}>
              <Input
                id={fullName(user)}
                name={fullName(user)}
                type="checkbox"
                checked={taskFormData.assignees.includes(fullName(user))}
                onChange={handleChange}
              />
              <Label for={fullName(user)}>{fullName(user)}</Label>
            </FormGroup>
          ))}
        </div>
        <Button id="login-btn" color="primary">
          Save
        </Button>
      </Form>
    </div>
  );
};
export default AddTask;
