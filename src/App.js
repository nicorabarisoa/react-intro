
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
  const parts = [
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
  return (
    <div>
      <Header course={course}/>
      <Content part={parts[0].name} exercise={parts[0].exercises}/>
      <Content part={parts[1].name} exercise={parts[1].exercises}/>
      <Content part={parts[2].name} exercise={parts[2].exercises}/>
      <Total calc={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App