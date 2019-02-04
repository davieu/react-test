import React, { Component } from 'react';
import './App.css';
//You can name the import anything instead of Person
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 's23ss', name: 'Max', age: 28 },
      { id: '912s2', name: 'Manu', age: 29 },
      { id: 'a24d2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    //ALWAYS UPDATE STATE IN AN IMMUTABLE FASHION
    //slice without arguments simply copies the full array. Best practice is to create a copy of original array before manipulating it. 
    // const persons = this.state.persons.slice();
    //The alternative is using the spread operator. Which is the es6 version.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;

//this is react without jsx
// return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

/* Alternative which executes an arrow function that does not use bind. It is a convenient syntax but can be inneficient. React can rerender certain things in the app too often. Using bind syntax is recomended since it is more efficient.*/
/* {<button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name2</button>} */
/*you can render them both ways. Bottom is for nesting stuff in between. props.children is how you get the elements within the opening and closing tags of the component */
/* 
<Person name='Max' age='28'/>
<Person name='Manu' age='29'><p>My Hobbies: Racing</p></Person>
<Person name='Stephanie' age='26'><p>test: kayak</p></Person>
*/