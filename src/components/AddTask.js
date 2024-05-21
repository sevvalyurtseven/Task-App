import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { fullName } from "../utils/utils";
import * as Yup from "yup";

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
  const taskSchema = Yup.object().shape({
    subject: Yup.string()
      .min(5, "Subject must be at least 3 characters")
      .required("Subject is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    assignees: Yup.array()
      .min(1, "At least one assignee is required")
      .max(3, "Maximum 3 assignees are allowed")
      .required("Assignees is required"),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    taskSchema
      .isValid(taskFormData)
      .then((valid) => {
        setIsValid(valid);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [taskFormData]);

  const handleChange = (event) => {
    const { checked, type } = event.target;
    let { name, value } = event.target;
    const updatedTaskForm = { ...taskFormData };
    if (type === "checkbox") {
      if (checked) {
        updatedTaskForm.assignees.push(name);
      } else {
        const index = updatedTaskForm.assignees.indexOf(name);
        updatedTaskForm.assignees.splice(index, 1);
      }
      name = "assignees";
      value = updatedTaskForm.assignees;
    } else {
      updatedTaskForm[name] = value;
    }
    console.log(updatedTaskForm);
    setTaskFormData(updatedTaskForm);

    Yup.reach(taskSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
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
