import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

  // Link
} from "react-router-dom";

import './App.css';
// import Button from './Components/Button'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(localStorage.getItem('user') ? true :false)



  return (
    <Router>
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} user={localStorage.getItem('user')  || ''}/>

      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/login" >
          <Login setLoggedIn={setLoggedIn}  />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
