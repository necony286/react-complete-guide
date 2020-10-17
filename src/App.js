import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <p>This is really working!</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="23">
        My hobbies: racing
      </Person>
      <Person name="Step" age="25" />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', { className: 'App' }, 'does this work now')
  // );
}

export default App;
