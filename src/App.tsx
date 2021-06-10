import React from 'react';
import './App.css';
import Button from './Components/Button'


function App() {
  return (
    <div className="App">
      Hello world
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    </div>
  );
}

export default App;
