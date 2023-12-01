import React, { Component } from "react";
import "./App.css";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      listTodo: [],
    };
  }

  addList = (input) => {
    if (input !== "") this.setState({ listTodo: [...this.state.listTodo, input] });
  };

  deleteItem = (key) => {
    let newListTodo = [...this.state.listTodo];
    newListTodo.splice(key, 1);
    this.setState({ listTodo: [...newListTodo] });
  };

  render() {
    return (
      <div className="card">
        <h1>ToDo</h1>
        <hr />
        <input
          type="text"
          placeholder="To do..."
          value={this.state.inputText}
          onChange={(e) => {
            this.setState({ inputText: e.target.value });
          }}
          style={{
            margin: "2%",
            border: "1px solid black",
            height: "45px",
            width: "70%",
            borderRadius: "10px",
            padding: "5px",
          }}
        />

        <button
          style={{
            color: "green",
            fontSize: "",
          }}
          onClick={() => {
            this.addList(this.state.inputText);
            this.setState({ inputText: "" });
          }}
        >
          +
        </button>
        <div className="content">
          {this.state.listTodo.map((listItem, i) => {
            return <List key={i} index={i} item={listItem} deleteItem={this.deleteItem} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
