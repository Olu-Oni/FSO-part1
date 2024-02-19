import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad, all, avg, perc } = props;
  return (
    <div>
      <h2>statistics</h2>

      <table>
        
       <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={avg} />
          <StatisticsLine text="positive" value={perc} text2="%" />
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.text2}
      </td>
    </tr>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [perc, setPerc] = useState(0);

  const val = { good: good, neutral: 0, bad: -1 * bad };
  console.log(val);
  const handleGood = () => {
    const newGood = good + 1;
    const newAll = newGood + bad + neutral;
    const newAvg = (newGood + -1 * bad) / newAll;
    setGood(newGood);
    setAll(newAll);
    setAvg(newAvg);
    setPerc((newGood / newAll) * 100);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    const newAll = good + newBad + neutral;
    const newAvg = (good + -1 * newBad) / newAll;
    setBad(newBad);
    setAll(newAll);
    setAvg(newAvg);
    setPerc((good / newAll) * 100);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    const newAll = good + bad + newNeutral;
    const newAvg = (good + -1 * bad) / newAll;
    setNeutral(newNeutral);
    setAll(newAll);
    setAvg(newAvg);
    setPerc((good / newAll) * 100);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        perc={perc}
      />
    </div>
  );
};

export default App;
