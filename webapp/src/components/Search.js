import React, { Component } from 'react';

class Search extends Component {
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
  	this.props.search(this.state.title)
  	this.setState({title: ""});
  }

  render() {
    return (
    	<div>
    		<h2>Find Your Gif</h2>
    		<form onSubmit={this.handleSubmit} >
    			<input type="text" value={this.state.title} onChange={this.handleChange} />
    			<input type="submit" value="Search" />
    		</form>
    	</div>
    );
  }
}

export default Search;