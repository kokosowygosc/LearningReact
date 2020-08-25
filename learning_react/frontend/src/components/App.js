import ReactDOM from "react-dom"
import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/lead")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong! "};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <ul>
            {this.state.data.map(contact => {
                return (
                    <li key={contact.id}>
                        {contact.name} - {contact.email}
                    </li>
                );
                })}
            </ul>
        );
    }
}

const MyComponent = props => {
    return <h1>Hello, {props.name}! </h1>;
}

export default App;

const  container1 = document.getElementById("app");
ReactDOM.render(<App />, container1);
const  container2 = document.getElementById("second_app");
ReactDOM.render(<MyComponent name="Mateusz" />, container2);