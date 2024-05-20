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
          <div key={user.id} className="userlist-container">
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
};
export default UserList;
