const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {

  const { part } = props

  return (
    <>
      <p>
        <strong> {part.name}: </strong> 
        {part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {

  const { parts } = props

  return (
    <div>

      {parts.map( (part) => {
        return  <Part key={ part.id }  part={part} />
      } )}

    </div>
  )
}


const Total = (props) => {

  const { parts } = props

  let sum = parts.reduce( (accumulator, part) => {

    const exercises = part.exercises

    return (
      accumulator + exercises
    )
  }, 0)

  return (
    <div>
      <p> <strong> Total of {sum} exercises </strong>
      </p>
    </div>
  )
}

const Course = (props) => {

  const { name, parts } = props.course

  return (

    <div>

      <Header course={ name } />
      <Content parts={ parts }/>
      <Total parts={ parts } />

    </div>
    
  )

}

export default Course