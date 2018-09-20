import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      { id: 1, title: "title1"},
      { id: 2, title: "title2"},
      { id: 3, title: "title3"},
      { id: 4, title: "title4"},
      { id: 5, title: "title5"},
      ],
      nextId: 0
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>TodoApp</div>
        <List todos={this.state.todos}/>
      </React.Fragment>
    );
  }
}

export default App;
