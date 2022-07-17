import { useState } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification/Notification";
import Logo from "./Logo/Logo";

function App()  {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedbackGood = () => {
    setGood(good + 1);
  }

  const addFeedbackNeutral = () => {
    setNeutral(neutral + 1);
  }

  const addFeedbackBad = () => {
    setBad(bad + 1);
  }

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()*100));
};

const onLeaveFeedback = key => {
  if (key === 'good') {
    addFeedbackGood();
  }
  if (key === 'neutral') {
    addFeedbackNeutral();
  }
  if (key === 'bad') {
    addFeedbackBad();
  }
};

  return (
    <>
    <Logo />
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() > 0
      ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivPercentage={countPositiveFeedbackPercentage()}
        />)
      : (<Notification message="There is no feedback" />)
      }
    </Section>
  </>
  )
};

export default App;
