const UserList = (props) => {
  //destructure
  const { allUsers } = props;

  return (
    <>
      {allUsers.map((user) => (
        <div className="userlist-container">
          <h1>{user.first_name}</h1>
        </div>
      ))}
    </>
  );
};
export default UserList;
