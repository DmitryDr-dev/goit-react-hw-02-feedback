import { Component } from 'react';
import styles from './App.module.css';

// components
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = grade => {
    console.log(grade);

    this.setState(prevState => {
      return {
        [grade]: prevState[grade] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.floor((good * 100) / total);
  };

  render() {
    const reviewGrades = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={reviewGrades}
            onLeaveFeedback={this.onClickHandler}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
