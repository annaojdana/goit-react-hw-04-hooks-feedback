import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {firstLetterUppercase} from '../../services/firstLetterUppercase'

const Statistics = ({ total, positivePercentage, reactions, options }) => {
  const {
    statistics__wrapper,
    statistics__label,
    statistics__value,
    statistics__text,
  } = styles;

  return (
    <div className={statistics__wrapper}>
      {options.map(option => (
        <p className={statistics__text} key={option}>
          <span className={statistics__label}>{firstLetterUppercase(option)}: </span>
          <span className={statistics__value}>{reactions[option]}</span>
        </p>
      ))}
      <p className={statistics__text}>
        <span className={statistics__label}>Total: </span>
        <span className={statistics__value}>{total}</span>
      </p>
      <p className={statistics__text}>
        <span className={statistics__label}>Positive feedback: </span>
        <span className={statistics__value}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  reactions: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
