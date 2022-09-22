import "./App.css";
import Header from "./Header";
import Card from "./Card";
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
        {users?.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
