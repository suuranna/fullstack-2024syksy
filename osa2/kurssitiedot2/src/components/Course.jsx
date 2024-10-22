const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Content = ({ parts }) => {
    const newParts = parts.map(part => 
      <Part part={part} key={part.id}/>
    )
    return(
      <div>
        {newParts}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)
    return (
      <strong>Total of {total} exercises </strong>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course