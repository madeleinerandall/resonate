import "./App.css";
import Header from "./Header";
import { useEffect, useState } from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const json = await res.json();
  return json;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="App">
      <Header />

      <ul className="body gutters">
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
