import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class Todo extends Component {
  state = {
    todos: [
      { _id: 1, content: "Buy New PC", isDone: false },
      { _id: 2, content: "Go Outside", isDone: false },
      { _id: 3, content: "Download Music", isDone: true }
    ],
    value: ""
  };
  style = {
    outline: "none"
  };
  handleCheckedChange = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].isDone = todos[index].isDone ? false : true;
    this.setState({ todos });
  };
  handleClear = () => {
    const todos = this.state.todos.filter(todo => !todo.isDone);
    this.setState({ todos });
  };
  handleAddTodo = () => {
    if (this.state.value === "") return;
    const todos = [...this.state.todos];
    todos.push({
      _id: todos.length + 1,
      content: `${this.state.value}`,
      isDone: false
    });
    this.setState({ todos });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        {this.getCountMessage()}
        <ul className="list-unstyled">
          {todos.map(todo => (
            <li key={todo._id}>
              <Checkbox
                checked={todo.isDone}
                onClick={() => this.handleCheckedChange(todo)}
              />
              {todo.isDone ? <del>{todo.content}</del> : todo.content}
            </li>
          ))}
          <li>
            <TextField label="To Do..." onChange={this.handleChange} />
            <Fab
              color="primary"
              size="medium"
              style={this.style}
              className="ml-4"
              onClick={this.handleAddTodo}
            >
              <AddIcon />
            </Fab>
          </li>
        </ul>
        {this.renderClearButton()}
      </React.Fragment>
    );
  }

  renderClearButton = () => {
    const { todos } = this.state;
    if (todos.length > 0)
      return (
        <Button style={this.style} onClick={this.handleClear}>
          Clear Complete
        </Button>
      );
  };

  getCountMessage = () => {
    const { todos } = this.state;
    const remainCount = todos.filter(todo => !todo.isDone).length;
    if (remainCount > 0)
      return (
        <p>
          {remainCount} of {todos.length} Remaining
        </p>
      );

    return <p>No Work To Do</p>;
  };
}

export default Todo;
