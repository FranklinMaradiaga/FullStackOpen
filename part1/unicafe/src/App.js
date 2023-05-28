import { useState } from "react"

const Button = (props) => {

  const { handleClick, text } = props

  return (
    <>
      <button onClick={ handleClick }> {text} </button>
    </>
  )
}

const Statistics = (props) => {

  const { average, positiveAvg } = props

  if (average === 0) {
    return (
      <>
        <p> No feedback given yet! </p>
      </>
    )
  }

  return (
    <>
      <tr>
        <td> Average { average } </td>
      </tr>
      
      <tr>
        <td> Positive { positiveAvg } </td>
      </tr>
    </>
  )

}

const App = () => {

  // save clicks of each button to its own state
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodBttn = () => {
    setGood( good + 1 )
  }

  const handleNeutralBttn = () => {
    setNeutral( neutral + 1 )
  }

  const handleBadBttn = () => {
    setBad( bad + 1 )
  }

  const sum = good + neutral + bad

  const average = () => {

    return (
      sum / 3
    )
  }

  const positiveAvg = () => {

    const avg = good / sum

    if (isNaN(avg)) return 0

    return avg
  }

  return (
    <div>


      <h1> Give Feedback </h1>

      <Button handleClick={ handleGoodBttn } text="good" />
      <Button handleClick={ handleNeutralBttn } text="neutral" />
      <Button handleClick={ handleBadBttn } text="bad" />

      <h2> Statistics </h2>

      <table>
      
        <tbody>
          <tr>
            <td> Good </td>
            <td> { good } </td>
          </tr>
          <tr>
            <td> Neutral </td>
            <td> { neutral } </td>
          </tr>
          <tr>
            <td> Bad </td>
            <td> { bad } </td>
          </tr>
        </tbody>
      </table>

      <Statistics average={ average() } positiveAvg={ positiveAvg() }  />
    </div>
  )
}

export default App;
