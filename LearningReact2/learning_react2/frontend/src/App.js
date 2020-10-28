import './App.css';
import React, {Component} from "react";
import Modal from "./components/Modal";
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      testList: [],
      activeItem: {
        test: "",
      },
    }
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("api/learn/")
      .then(res => this.setState({ testList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if(item.id) {
      axios
        .put(`/api/learn/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("/api/learn/", item)
      .then(res => this.refreshList())
  };

  createItem = () => {
    const item = { test: ""};
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const testItems = this.state.testList;
    return testItems.map(item => (
      <li key={item.id} className="list-group-item">
          { item.test }
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto">
            {this.renderItems()}
            <button onClick={this.createItem} className="btn btn-primary btn-block">
              Add item
            </button>
          </div>
        </div>
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
            />
          ) : null}
      </main>
    )
  }
}

export default App;