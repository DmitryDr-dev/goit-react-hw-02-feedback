import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles?.feedbacks}>
      {options.map(grade => {
        return (
          <li className={styles?.feedbacks__item} key={grade}>
            <button
              className={styles?.feedbacks__btn}
              type="button"
              onClick={() => {
                onLeaveFeedback(grade);
              }}
            >
              {grade}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
