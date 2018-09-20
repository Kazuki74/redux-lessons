import React, { Component } from 'react';
import List from './components/List';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }
  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
     })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>TodoApp</div>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </React.Fragment>
    );
  }
}

export default App;
