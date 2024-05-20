import Header from "./layouts/Header.js";
import Main from "./layouts/Main.js";
import Footer from "./layouts/Footer.js";
import "./App.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "Sevval",
    password: "1234",
  }); // giriş yapan kullanıcı
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
      .get("https://reqres.in/api/users")
      .then((response) => {
        setAllUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }, []); //DidMount

  const handleLogin = (credentials) => {
    //login credentials check in allUsers
    //eger girilen bilgiler dogruysa setLoggedInUser fonksiyonunu calistir
  };

  return (
    <div className="App">
      <Header user={loggedInUser} />
      <Main handleLogin={handleLogin} tasks={tasks} allUsers={allUsers} />
      <Footer />
    </div>
  );
}

export default App;
