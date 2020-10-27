import React from 'react'
import ReactDOM from 'react-dom'

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Zaloguj się
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Wyloguj się
    </button>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  let greeting;
  {isLoggedIn
    ? greeting = <h1>Witamy ponownie!</h1>
    : greeting = <h1>Proszę się zarejestrować</h1>
  }
  return greeting
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {isLoggedIn
          ? <LogoutButton onClick={() => this.handleLogoutClick()}/>
          : <LoginButton onClick={() => this.handleLoginClick() }/>
        }
      </div>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('login'))