import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  type User = {
    id: number;
    name: string;
  };

  // const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log('Users: ' + users);

  return (
    <>
      <HeaderComponent />
      <h1>Users</h1>
      {/* <p>{users}</p> */}

      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      <MainComponent />

      <FooterComponent />
    </>
  );
}

export default App;
