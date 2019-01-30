import React from 'react';

//naming the const person argument (props) is standard so people can understand your code. Can be called anything though
const person = (props) => {
    return (
        <div>
            <p onClick={props.click} >I'm {props.name} and I am {props.age} years old!</p>
            {/*props.children - children is a reserved word. children refers to any elements within the opening and closing tags of the component*/}
            {props.children}
            <input type="text" placeholder="Name Here" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}

export default person;