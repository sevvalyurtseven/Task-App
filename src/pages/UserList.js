import User from "../components/User";
import "./UserList.css";

const UserList = (props) => {
  //destructure
  const { allUsers } = props;

  return (
    <>
      <h2>USERS</h2>
      <div className="userlist-container">
        {allUsers.map((user) => (
          <div className="userlist-container">
            <User key={user.id} user={user} />
          </div>
        ))}
      </div>
    </>
  );
};
export default UserList;
