import axios from "axios";

const giphyAPI = (terget) => {
  const query = terget;
  const key = "LARVnBHiwkJAJhZevDhFimwLgw00m7rJ";
  const limit = "100"

  const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`

  return axios.get(url);

  // axios.get(url).then(res => {
  //   const data = res.data.data;
  //   const imageUrlList = data.map(item => item.images.downsized.url);
  //   this.setState({gifUrllist: imageUrlList})
  // })
  // console.log(this.state.gifUrllist)
}

export default giphyAPI;