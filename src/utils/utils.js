export const fullName = (user) => {
  return `${user.first_name} ${user.last_name}`;
};

export const getTasksByStatus = (tasks, status) => {
  return tasks.filter((task) => task.status === status);
};

export const getStatusText = (status) => {
  const textToShow = status === "incomplete" ? "Complete" : "Incomplete";
  const textToSet = status === "incomplete" ? "completed" : "incomplete";
  return { textToShow, textToSet };

  /*
  return {
           textToShow: textToShow,
           textToSet: textToSet
  }
  */
};
