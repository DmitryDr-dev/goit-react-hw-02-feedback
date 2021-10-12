import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles?.statistics}>
      <li className={styles?.statistics__item}>Good: {good}</li>
      <li className={styles?.statistics__item}>Neutral: {neutral}</li>
      <li className={styles?.statistics__item}>Bad: {bad}</li>
      <li className={styles?.statistics__item}>Total: {total}</li>
      <li className={styles?.statistics__item}>
        Positive Feedback: {positivePercentage || 0}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
