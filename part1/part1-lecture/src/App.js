import { useState } from "react"

// Do not define components inside another component
const Display = props => <div>{props.value}</div>

// This is the right place to define a component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}






















// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         The app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       Button Press History: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ( { handleClick, text } ) => {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// const App = (props) => {
  
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
      
//       <Button handleClick={ handleLeftClick } text = 'left' />
//       <Button handleClick={ handleRightClick } text = 'right' />

//       {right}
//       <History allClicks = { allClicks } />
//     </div>
//   )
  
// }

export default App