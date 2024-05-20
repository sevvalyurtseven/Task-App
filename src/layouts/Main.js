import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import UserList from "../pages/UserList";
import UserPage from "../pages/UserPage";

const Main = (props) => {
  //destructuring
  const { allUsers } = props;

  return (
    <div>
      <div className="main-container">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/users">
            <UserList allUsers={allUsers} />
          </Route>
          <Route exact path="/users/:id/:name/:surname">
            <UserPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Main;
