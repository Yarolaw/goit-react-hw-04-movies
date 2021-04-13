import React, { Component } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import MovieList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query: currentQuery } = this.state;
    const { query: prevQuery } = prevState;

    if (currentQuery.trim() === '') {
      return;
    }

    if (currentQuery !== prevQuery) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8bdf11970b9fe1026b20627e10b7f0b2&query=${currentQuery}`,
      );

      this.setState({ movies: [...response.data.results] });
      return;
    }
  }

  handleSubmitForm = currentQuery => {
    this.setState({ query: currentQuery });
  };

  render() {
    return (
      <>
        <h1>Поиск фильмов</h1>
        <Form onSubmit={this.handleSubmitForm} />

        <MovieList movies={this.state.movies} />
      </>
    );
  }
}
export default MoviesPage;
