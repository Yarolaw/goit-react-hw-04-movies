import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            exact
            className="links"
            activeClassName="active-links"
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            activeClassName="active-links"
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
