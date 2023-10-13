//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, {name: uName, age: uAge, college: uCollege, id: Math.random().toString()}];
    });
  }
  return (
  <React.Fragment>
<AddUser onAddUser={addUserHandler}/>
<UsersList users={usersList}/>
  </React.Fragment>

  );
}

export default App;
