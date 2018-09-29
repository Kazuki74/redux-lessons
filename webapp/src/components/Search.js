import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleChange = (event) => {
  	const title = event.target.value
  	this.setState({ title: title });
  }

  handleSubmit = (event) => {
    const { getUrls } = this.props;
  	event.preventDefault();
  	getUrls(this.state.title)
  	this.setState({title: ""});
  }

  render() {
    console.log(this.props)
    return (
    	<div>
    		<form onSubmit={this.handleSubmit} >
    			<input type="text" value={this.state.title} onChange={this.handleChange} />
    			<input type="submit" value={this.props.buttonText} />
    		</form>
    	</div>
    );
  }
}

export default Search;