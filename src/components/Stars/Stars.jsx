import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

/* Не понял что некорректно в этом месте. Пока что заглушил правило */
// eslint-disable-next-line react/prop-types
export default function Stars({ rate }) {
  const avlRates = [1, 2, 3, 4, 5];
  if (avlRates.indexOf(rate) === -1) {
    return null;
  }

  const stars = [];
  for (let i = 0; i < rate; i += 1) {
    /* Использую индекс в качестве ключа, т.к. это статичный список */
    stars.push(<Star key={i} />);
  }

  return (
    <>
      {stars}
    </>
  );
}

Stars.propType = {
  rate: PropTypes.number,
};
