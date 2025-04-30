import React, { useState, useEffect } from 'react';

import { getUsers } from './services/userService';

import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    getUsers().then(
      ({data}) => { setBackendData(data) }
    )
  }, []);

  return (
    <div className="App">
      
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  );
}

export default App;
