import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  fetchGiphyApi = () => {
    const query = "cat";
    const key = "LARVnBHiwkJAJhZevDhFimwLgw00m7rJ";
    const limit = "5"

    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`

    axios.get(url).then(res => {
      console.log(res.data.data[0].images.downsized.url)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.fetchGiphyApi} >Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
