import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <p>This is really working!</p>
      <Person />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', { className: 'App' }, 'does this work now')
  // );
}

export default App;
