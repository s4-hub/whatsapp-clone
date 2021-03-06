import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    // BEM Naming Convention

    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Router >
        <Sidebar />
          <Switch>
            
            <Route path="/rooms/:roomId">
            
            <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch> 
        </Router>  
      </div> 
      )}
      
    </div>
  );
}

export default App;
