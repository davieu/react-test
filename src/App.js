import React, { Component } from 'react';
import './App.css';
//You can name the import anything instead of Person
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DON'T DO THIS- won't work when you change state directly like this  this.state.persons[0].name = 'Maximilian'
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

        {/* Alternative which executes an arrow function that does not use bind*/}
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name2</button>
          {/*you can render them both ways. Bottom is for nesting stuff in between. props.children is how you get the elements within the opening and closing tags of the component */}
        {/* 
        <Person name='Max' age='28'/>
        <Person name='Manu' age='29'><p>My Hobbies: Racing</p></Person>
        <Person name='Stephanie' age='26'><p>test: kayak</p></Person>
        */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          ><p>
          My Hobbies: Racing</p></Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
  
    );

    //this is react without jsx
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
