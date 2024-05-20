import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  //destructure
  const { user } = props;
  return (
    <div>
      <header>
        <h1>TASK APP</h1>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
        <div className="user-container">
          <span className="profile-image"></span>
          <span> {user.name}</span>
        </div>
      </header>
    </div>
  );
};
export default Header;
