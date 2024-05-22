import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Login.css";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const Login = (props) => {
  //destructure
  const { handleLogin } = props;

  const [loginFormData, setLoginFormData] = useState(initialValues);

  const handleChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(loginFormData);
  };

  return (
    <>
      <h2>LOGIN</h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Please enter your email"
            type="email"
            data-cy="email-input"
            value={loginFormData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Please enter your password"
            type="password"
            data-cy="password-input"
            value={loginFormData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button id="login-btn" color="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;
