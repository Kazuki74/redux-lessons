import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleChange = (event) => {
  	const title = event.target.value
  	this.setState({ title: title })
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.props.addTodo(this.state.title)
  	this.setState({title: ""});
  }

  render() {
    return (
    	<div>
    		<h2>AddTodo</h2>
    		<form onSubmit={this.handleSubmit} >
    			<input type="text" value={this.state.title} onChange={this.handleChange} />
    			<input type="submit" value="Add to Todo List." />
    		</form>
    	</div>
    );
  }
}

export default AddTodo;
