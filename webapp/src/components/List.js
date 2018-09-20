import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	const list = this.props.todos.map(todo => {
  		return <li>#{todo.id} {todo.title}</li>
  	})
    return (
      <div>{list}</div>
    );
  }
}

export default List;
