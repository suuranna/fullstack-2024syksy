import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr> 
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const countAverage = () => {
    const all = good + bad + neutral
    if (all == 0) {
      return 0
    }
    else {
      return (good * 1 + bad * (-1) + neutral * 0) / all 
    }
  }

  const countPositive = () => {
    const all = good + bad + neutral
    if (all == 0) {
      return 0
    }
    return (good / all) * 100 + "%"
  }

  if (good + bad + neutral == 0) {
    return (
      <div> 
        <h1>statistics</h1>
        <p>No feedbacks given</p> 
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"average"} value={countAverage()} />
          <StatisticsLine text={"positive"} value={countPositive()} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App