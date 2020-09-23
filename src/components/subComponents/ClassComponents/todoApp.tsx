import React, { Component } from "react";
import { TodoState } from "../../../models/todos";

export class TodoApp extends Component<any, TodoState> {
  state: TodoState = {
    name: "",
    todos: [],
  };
  add = () => {
    const value = this.state.name;
    this.setState({ todos: [...this.state.todos, value] });
  };
  clear = () => {
    this.setState({ name: "", todos: [] });
  };
  handler = (e: any) => {
    this.setState({ name: e.target.value });
  };
  componentDidMount() {
    console.log("classTwo Mounted..!!");
  }
  componentWillUnmount() {
    console.log("classTwo UnMounted...");
  }
  render() {
    const { name, todos } = this.state;
    return (
      <div>
        <div>Todo App</div>
        <input type="text" value={name} onChange={(e) => this.handler(e)} />
        <button onClick={this.add}>Add</button>
        <button onClick={this.clear}>clear</button>
        {todos.map((person, index) => {
          return <p key={index}>{person}</p>;
        })}
      </div>
    );
  }
}
