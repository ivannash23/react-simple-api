import React, { Component } from "react";
import $ from "jquery";
import Search from "./Search";
import Results from "./Results";

const searchGifs = query => {
  const giphyApi = {
    baseUrl: "http://api.giphy.com",
    searchEndpoint: "/v1/gifs/search",
    publicApiKey: "dc6zaTOxFJmzC"
  };

  return $
    .ajax({
      url: giphyApi.baseUrl + giphyApi.searchEndpoint,
      method: "GET",
      data: {
        api_key: giphyApi.publicApiKey,
        q: query
      }
    })
    .then(response => response["data"]);
};

class SearchContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      searched: false,
      results: []
    };
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    searchGifs(this.state.query).then(gifs => {
      this.setState({
        results: gifs,
        searched: true
      });
    });
  }

  render() {
    return (
      <div className="SearchContainer">
        <Search
          handleSubmit={event => this.handleSubmit(event)}
          handleChange={event => this.handleChange(event)}
          query={this.state.query}
        />
        <Results searchResults={this.state.results} />

      </div>
    );
  }
}

export default SearchContainer;
