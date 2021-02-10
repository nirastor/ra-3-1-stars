import React from 'react';
import PropTypes from 'prop-types';
import './Film.css';
import Stars from '../Stars/Stars';

export default function Film({ film }) {
  return (
    <div className="film">
      <div className="film-img" />
      <div className="film-title">{film.name}</div>
      <ul className="film-stars">
        <Stars rate={film.rate} />
      </ul>
    </div>
  );
}

Film.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number,
  }).isRequired,
};
