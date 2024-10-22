import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <div>{text} {value} </div>
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
      <StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"average"} value={countAverage()} />
      <StatisticsLine text={"positive"} value={countPositive()} />
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App