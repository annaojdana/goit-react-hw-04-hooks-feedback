import styles from './Feedback.module.css';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import React, { useState } from 'react';

const INITIAL_VALUE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {
  const [reactions, setReactionsCount] = useState({ ...INITIAL_VALUE });
  
  const { wrapper } = styles;

  const options = Object.keys(INITIAL_VALUE);

  const increamentStateField = stateField =>
    setReactionsCount({
      ...reactions,
      [stateField]: reactions[stateField] + 1,
    });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = reactions;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0
      ? +(((reactions.good / countTotalFeedback()) * 100).toFixed(2))
      : 0;
  };

  return (
    <div className={wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={increamentStateField}
        />
      </Section>
      <Section title="Statistcs">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options = {options}
            reactions={reactions}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
