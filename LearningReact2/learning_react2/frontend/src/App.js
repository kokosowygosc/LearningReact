import './App.css';
import React, {Component} from "react";
import ModalCreate from "./components/CustomCreate";
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

  deleteItem = item => {
    axios
      .delete(`api/learn/${item.id}`)
      .then(res => this.refreshList());
  };

  editItem = item => {
    this.setState({activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const testItems = this.state.testList;
    return testItems.map(item => (
      <li key={item.id} className="list-group-item">
        { item.test }
        <button onClick={() => this.deleteItem(item)} className="btn btn-danger float-right">
          Remove
        </button>
        <button onClick={() => this.editItem(item)} className="btn btn-dark float-right">
          Edit
        </button>
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
            <ModalCreate
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