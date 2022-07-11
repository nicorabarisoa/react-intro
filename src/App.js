
  const Header =(props)=>{
    return(
      <div>
        <p>Le cours d'aujourd'hui est {props.course}</p>
      </div>
    )
  }
  const Content =(props)=>{
    return(
      <div>
        <p>La partie est {props.part}</p>
        <p>Le nombre d'exercice est de {props.exercise} exercice</p>
      </div>
    )
  }

  const Total =(props)=>{
    return(
      <div>
        <p>Le total des exercises sont {props.calc}</p>
       
      </div>
    )
  }

const App = () => {

  

 
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={part1.name} exercise={part1.exercises}/>
      <Content part={part2.name} exercise={part2.exercises}/>
      <Content part={part3.name} exercise={part3.exercises}/>
      <Total calc={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App