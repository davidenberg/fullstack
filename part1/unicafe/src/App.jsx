import { useState } from 'react'

const StatisticLine = ({name, value})  => {
  return (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  let avg = 0
  let pos = 0

  if (sum != 0)
  {
    avg = (good-bad)/sum
    pos = good/sum * 100
    return (
      <table>
        <tbody>
          <StatisticLine name={"good"} value={good}/>
          <StatisticLine name={"neutral"} value={neutral}/>
          <StatisticLine name={"bad"} value={bad}/>
          <StatisticLine name={"all"} value={sum}/>
          <StatisticLine name={"average"} value={avg}/>
          <StatisticLine name={"positive"} value={pos + ' %'}/>
        </tbody>
      </table>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name={"give feedback"}/>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header name={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad} />  
    </div>
  )
}

export default App