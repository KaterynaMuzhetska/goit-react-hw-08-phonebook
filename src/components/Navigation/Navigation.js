import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';

import styles from '../Navigation/Navigation.module.css';

const style = {
  activeLink: {
    color: 'rgb(231, 40, 158)',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Main page
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeStyle={style.activeLink}
          >
            Contacts
          </NavLink>
          {/* <NavLink
            to="/upload"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Загрузить
          </NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;
