import Header from "./layouts/Header.js";
import Main from "./layouts/Main.js";
import Footer from "./layouts/Footer.js";
import "./App.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); // giriş yapan kullanıcı
  const [allUsers, setAllUsers] = useState([]); // tum kullanicilari tutacak (gecici backend görevi)
  const [tasks, setTasks] = useState([]);

  const history = useHistory();

  //Eger kullanıcı giriş yaptıysa tasks sayfasına gidecek. Eger kullanıcı giriş yapmadıysa login sayfasına gidecek

  useEffect(() => {
    if (!loggedInUser.name) {
      history.push("/login");
    }
  }, []); //DidMount

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=20")
      .then((response) => {
        setAllUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }, []); //DidMount

  const handleLogin = (credentials) => {
    //login credentials check in allUsers
    const user = allUsers.find(
      (user) =>
        user.first_name === credentials.password &&
        user.email === credentials.email
    );
    //eger girilen bilgiler dogruysa setLoggedInUser fonksiyonunu calistir
    if (user) {
      setLoggedInUser(user);
      history.push("/tasks");
    } else {
      console.error("User login", credentials);
    }
  };

  const handleLogout = () => {
    setLoggedInUser({});
    history.push("/login");
  };

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };
    setTasks([...tasks, newTask]);
  };

  const changeTaskStatus = (task, status) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        item.status = status;
      }
      return item;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Header user={loggedInUser} handleLogout={handleLogout} />
      <Main
        handleLogin={handleLogin}
        tasks={tasks}
        allUsers={allUsers}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
      />
      <Footer />
    </div>
  );
}

export default App;
