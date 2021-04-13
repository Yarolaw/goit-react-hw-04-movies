import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /*webpackChunkName: "movieDetails-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-page" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Waiting...</h2>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage}></Route>
          <Route
            path={routes.movieDetails}
            component={MovieDetailsPage}
          ></Route>
          <Route path={routes.movies} component={MoviesPage}></Route>
          <Route component={HomePage}></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
