const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        <strong> {props.part.name}: </strong> 
        {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>

      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />

    </div>
  )
}


const Total = (props) => {

  const sum = props.exercises1 + props.exercises2 + props.exercises3;

  return (
    <div>
      <p> <strong> Number of exercises: </strong>
          {sum} 
      </p>
    </div>
  )
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  }

  return (
    <>

      <Header course={course.name} />

      <Content parts={course.parts}/>

      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />

    </>
  )
}

export default App