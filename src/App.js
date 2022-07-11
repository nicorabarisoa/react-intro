
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
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Content part={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} exercise={course.parts[2].exercises}/>
      <Total calc={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App