import { Card, CardBody, Button, CardSubtitle, CardTitle } from "reactstrap";
const User = (props) => {
  const { user } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <img alt={user.first_name} src={user.avatar} />
      <CardBody>
        <CardTitle tag="h5">
          {user.first_name} {user.last_name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {user.email}
        </CardSubtitle>
        <Button>Details</Button>
      </CardBody>
    </Card>
  );
};
export default User;
