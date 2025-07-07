import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StadisticLine = ({ text, value }) => {
  return (
    <>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </>
  )
}


const Stadistics = ({ good, neutral, bad }) => {
  let cantidadTotal = good + neutral + bad;
  let valorGood = 1;
  let valorNeutral = 0;
  let valorBad = -1;
  let score = (good * valorGood + neutral * valorNeutral + bad * valorBad) / cantidadTotal;

  return (
    <div>
      <h1>stadistics</h1>
      <table>
        <tbody>
          <tr>
            <StadisticLine text="good" value={good} />
          </tr>
          <tr>
            <StadisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StadisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StadisticLine text="all" value={cantidadTotal} />
          </tr>
          <tr>
            <StadisticLine text="average" value={score} />
          </tr>
          <tr>
            <StadisticLine text="positive" value={`${(good / cantidadTotal) * 100} %`} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Stadistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

export default App