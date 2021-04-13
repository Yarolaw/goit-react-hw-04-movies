import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../components/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=8bdf11970b9fe1026b20627e10b7f0b2',
    );
    const results = response.data.results;

    this.setState({ movies: results });
  }

  render() {
    return (
      <>
        <h1> Список трендовых фильмов </h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}
export default HomeView;
