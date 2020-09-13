import ReactDOM from "react-dom"
import React from 'react'

//Functions
function formatName(user) {
  return user.firstname + " " + user.lastname;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger!</h1>;
}

function tick() {
  const date = new Date().toLocaleTimeString();
  console.log(date);
  return date
}

const user = {
  firstname: "Mateusz",
  lastname: "Mar"
};

const element = (
  <div>
    {getGreeting()}
    {getGreeting(user)}
  </div>
);

const reactElement = React.createElement(
  'h1',
  {className: 'testing'},
  "Hello, world from ReactElement!"
);

let combine = [element, reactElement]

ReactDOM.render(combine, document.getElementById('concepts'));