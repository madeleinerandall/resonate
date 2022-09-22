import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Details from "./Details";
import { useEffect, useState } from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const json = await res.json();
  return json;
}

function App() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  console.log({ users });

  return (
    <div className="App">
      <Header />

      <ul className="body gutters">
        {users?.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </ul>

      <button onClick={handleClickOpen}>open</button>

      {open && <Details handleClose={handleClose} />}
    </div>
  );
}

export default App;
