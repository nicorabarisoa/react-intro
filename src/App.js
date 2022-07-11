
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Total calc={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App