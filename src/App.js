import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Ed', age: 20 },
      { name: 'Heinz', age: 33 },
    ],
  };

  // Dont pass handlers with '()', otherwise it will
  // get executed once the component get rendered
  switchNameEventHandler = (newName) => {
    // DON'T DO THIS: this.state.people[0].name = 'Eduard;
    this.setState({
      people: [
        { name: newName, age: 21 },
        { name: 'Heinz', age: 33 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value, age: 21 },
        { name: 'Heinz', age: 33 },
      ],
    });
  };

  render() {
    //Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1> Hello there </h1>
        <button
          style={style}
          onClick={() => this.switchNameEventHandler('Eduard!')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Hacking the FBI
        </Person>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameEventHandler.bind(this, 'Eduard')}
        >
          My Hobbies: Skiing
        </Person>
      </div>
    );
  }
}

export default App;
