import User from "../components/User";

const UserList = (props) => {
  //destructure
  const { allUsers } = props;

  return (
    <>
      {allUsers.map((user) => (
        <div className="userlist-container">
          <User key={user.id} user={user} />
        </div>
      ))}
    </>
  );
};
export default UserList;
