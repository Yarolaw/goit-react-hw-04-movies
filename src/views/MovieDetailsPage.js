import React, { Component, Suspense, lazy } from 'react';
import axios from 'axios';
import { Switch, Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import s from '../App.module.css';

const Cast = lazy(() =>
  import('../components/Cast' /*webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /*webpackChunkName: "reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    title: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8bdf11970b9fe1026b20627e10b7f0b2`,
    );

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { backdrop_path, title, overview, release_date, genres } = this.state;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

    return (
      <div className={s.container}>
        <button className="Button" type="button" onClick={this.handleGoBack}>
          {' '}
          Go back
        </button>

        <div className="main-info">
          <div>{backdrop_path && <img src={imgUrl} alt={title} />}</div>
          <div className="text-info">
            <h2>
              {title} ({release_date})
            </h2>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <ul className="genres-list">
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <p> Additional information</p>

        <ul>
          <li>
            {' '}
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: { ...this.props.location.state },
              }}
              className="links"
              activeClassName="active-links"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { ...this.props.location.state },
              }}
              className="links"
              activeClassName="active-links"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<h2>Waiting...</h2>}>
          <Switch>
            <Route path={routes.cast} component={Cast}></Route>
            <Route path={routes.reviews} component={Reviews}></Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default MovieDetailsPage;
