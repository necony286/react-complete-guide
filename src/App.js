import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 24 },
      { name: 'Step', age: 22 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = () => {
    //console.log('was clicked');
    // DONT DO THIS (BAD - WONT WORK) this.state.persons[0].name = 'Necon';
    this.setState({
      persons: [
        { name: 'Maximus', age: 27 },
        { name: 'Manu', age: 24 },
        { name: 'Stephano', age: 23 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React app!</h1>
//       <p>This is really working!</p>
//       <button>Switch Name</button>
//       <Person name="Max" age="28" />
//       <Person name="Manu" age="23">
//         My hobbies: racing
//       </Person>
//       <Person name="Step" age="25" />
//     </div>
//   );
//   // return React.createElement(
//   //   'div',
//   //   null,
//   //   React.createElement('h1', { className: 'App' }, 'does this work now')
//   // );
// }

export default App;
