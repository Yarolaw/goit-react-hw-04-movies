import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class Reviews extends Component {
  state = {
    reviews: null,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8bdf11970b9fe1026b20627e10b7f0b2`,
    );

    const allReviews = await response.data.results;

    if (allReviews.length === 0) {
      this.setState({ error: 'No reviews for this film at that moment' });
      return;
    }

    this.setState({ reviews: [...allReviews] });
  }

  render() {
    const { reviews, error } = this.state;
    return (
      <ul>
        {reviews &&
          reviews.map(({ author, content }) => (
            <li key={uuidv4()}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        {error && <h2>{error}</h2>}
      </ul>
    );
  }
}

export default Reviews;
