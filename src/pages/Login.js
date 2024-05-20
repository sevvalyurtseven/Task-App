import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Login.css";
const Login = () => {
  return (
    <>
      <h2>LOGIN</h2>
      <Form className="login-form">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Please enter your email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Please enter your password"
            type="password"
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
