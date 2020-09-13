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

function Welcome1(props) {
  return <h2>Hi, {props.name} </h2>;
}

class Welcome2 extends React.Component {
  render() {
    return <h2>Hi, {this.props.name} </h2>;
  }
}

function App() {
  return (
    <div>
      <Welcome1 name={"Jack"}/>
      <Welcome1 name="Barry"/>
      <Welcome2 name="Philip"/>
    </div>
  );
}

const user = {
  firstname: "Mateusz",
  lastname: "Mar"
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Timer:</h1>
        <h2>Current time: {this.state.date.toLocaleString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />,
  document.getElementById('timer')
);


const element = (
  <div>
    {getGreeting()}
    {getGreeting(user)}
    {App()}
  </div>
);

const reactElement1 = React.createElement(
  'h1',
  {className: 'testing'},
  "Hello, world from ReactElement!"
);

const reactElement2 = <Welcome2 name="Jerry" />;

let combine = [element, reactElement1, reactElement2];

ReactDOM.render(combine, document.getElementById('concepts'));