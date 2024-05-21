export const fullName = (user) => {
  return `${user.first_name} ${user.last_name}`;
};

export const getTasksByStatus = (tasks, status) => {
  return tasks.filter((task) => task.status === status);
};
