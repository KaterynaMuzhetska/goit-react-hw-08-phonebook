import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'rgb(231, 40, 158)',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Please registration in portal</h1>
  </div>
);

export default HomeView;
