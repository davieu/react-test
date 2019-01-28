import React, { Component } from 'react';
import './App.css';
//You can name the import anything instead of Person
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>
        <Person name='Max' age='28'/>
        {/*you can render them both ways. Bottom is for nesting stuff in between. props.children is how you get the elements within the opening and closing tags of the component */}
        <Person name='Manu' age='29'><p>My Hobbies: Racing</p></Person>
        <Person name='Stephanie' age='26'><p>test: kayak</p></Person>
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
