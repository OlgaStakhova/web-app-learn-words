import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
        <NavLink
            className={({ isActive }) => cn(
              'navbar-item',
              { 'has-background-grey-lighter': isActive },
            )}
            to="/home"
          >
            Words list 
          </NavLink>

          <NavLink
            className={({ isActive }) => cn(
              'navbar-item',
              { 'has-background-grey-lighter': isActive },
            )}
            to="/newWord"
          >
            Add new word
            </NavLink>

            <NavLink
            className={({ isActive }) => cn(
              'navbar-item',
              { 'has-background-grey-lighter': isActive },
            )}
            to="/training"
          >
            Training
            </NavLink>

            <NavLink
            className={({ isActive }) => cn(
              'navbar-item',
              { 'has-background-grey-lighter': isActive },
            )}
            to="/resultsHistory"
          >
           Results history 
            </NavLink>
        </div>
      </div>
    </nav>
  );
};