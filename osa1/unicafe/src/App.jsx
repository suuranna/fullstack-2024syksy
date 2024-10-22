import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    return (good / all) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      good {good}
      <br/>
      neutral {neutral}
      <br/>
      bad {bad}
      <br/>
      all {good + neutral + bad}
      <br/>
      average {countAverage()}
      <br/>
      positive {countPositive()}%
    </div>
  )
}

export default App