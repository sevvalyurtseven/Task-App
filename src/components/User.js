const User = (props) => {
  const { user } = props;
  return (
    <div className="user-card">
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
    </div>
  );
};
export default User;
