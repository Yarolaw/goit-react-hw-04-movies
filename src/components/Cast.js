import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    credits: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8bdf11970b9fe1026b20627e10b7f0b2`,
    );

    this.setState({ credits: [...response.data.cast] });
  }
  render() {
    const { credits } = this.state;

    return (
      <ul>
        {credits.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                alt=""
              ></img>
            )}
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cast;
