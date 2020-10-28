import React from 'react'
import ReactDom from 'react-dom'

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("Kliknięto w link.")
  }

  return (
    <a href="#" onClick={handleClick}>
      Kliknij mnie
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'Włączony' : 'Wyłączony'}
      </button>
    );
  }
}

const elements = [ActionLink(), <Toggle />];

ReactDom.render(elements, document.getElementById('concepts2'))