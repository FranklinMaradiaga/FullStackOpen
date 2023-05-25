const Footer = () => {
  return (
    <div>
      <p> greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a> </p>
    </div>
  )
}

const Hello = (props) => {
  return (
    <>
      <p> Hello {props.name}, you are {props.age} years old! </p>
    </>
  )
}

// const App = () => {

//   const name = 'Peter';
//   const age = 10;

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App