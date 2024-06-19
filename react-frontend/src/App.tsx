import { useState, useEffect } from 'react';
import './App.css';

import MainComponent from './Layout/MainComponent';

function App() {
  type User = {
    id: number;
    name: string;
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log('Users: ' + users);

  return (
    <>
      <MainComponent></MainComponent>
    </>
  );
}

export default App;

// <HeaderComponent />
//       <h1>Users</h1>
//       {/* <p>{users}</p> */}

//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}

//       <MainComponent />

//       <FooterComponent />
