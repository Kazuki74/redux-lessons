import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUrllist : [],
    };
  }
  fetchGiphyApi = (terget) => {
    const query = terget;
    const key = "LARVnBHiwkJAJhZevDhFimwLgw00m7rJ";
    const limit = "5"

    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`

    axios.get(url).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      this.setState({gifUrllist: imageUrlList})
    })
    console.log(this.state.gifUrllist)
  }
  renderImageList = (list) => {
    const imageList = list.map((url,index) => {
      return(
        <li key={index}>
          <img src={url} alt="gif" />
        </li>
      )
    })
    return <ul>{imageList}</ul>
  }
  render() {
    return (
      <div className="App">
        <Search search={this.fetchGiphyApi}/>
        <h1 className="App-title" onClick={this.fetchGiphyApi} >Welcome to React</h1>
        <div>{this.renderImageList(this.state.gifUrllist)}</div>
      </div>
    );
  }
}

export default App;
