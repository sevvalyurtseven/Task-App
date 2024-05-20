import Header from "./layouts/Header.js";
import Main from "./layouts/Main.js";
import Footer from "./layouts/Footer.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); // giriş yapan kullanıcı
  const [allUsers, setAllUsers] = useState([]); // tum kullanicilari tutacak (gecici backend görevi)
  const [tasks, setTasks] = useState([]);

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
