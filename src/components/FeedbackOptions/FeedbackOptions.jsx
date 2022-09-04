import styles from './FeedbackOptions.module.css';
import { Button } from 'components/Button/Button';
import goodImg from '../../images/good.png';
import neutralImg from '../../images/neutral.png';
import badImg from '../../images/bad.png';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

  const { btnWrapper } = styles;

  const btnImages = [goodImg, neutralImg, badImg];

  return (
    <div className={btnWrapper}>
      {options.map((option,i) => (
        <Button key={option}
          title={option}
          img={btnImages[i]}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        ></Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
