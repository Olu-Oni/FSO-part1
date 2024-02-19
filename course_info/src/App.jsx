const Header = (props) => {
  return <h1>{props.course}</h1>;
};

//


//
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};
const App = () => {
  const course ={
  name: "Half Stack application development",
  part : [
    {
    name: "Fundamentals of React",
    exercises: 10,
  },
   {
    name: "Using props to pass data",
    exercises: 7,
  },
   {
    name: "State of a component",
    exercises: 14,
  },
]
}

  return (
    <div>
      <Header course={course.name} />
      <Content
        part1 = {course.part[0].name}
        exercises1={course.part[0].exercises}
        part2={course.part[1].name}
        exercises2={course.part[1].exercises}
        part3={course.part[2].name}
        exercises3={course.part[2].exercises}
      />
      <Total
        exercises1={course.part[0].exercises}
        exercises2={course.part[1].exercises}
        exercises3={course.part[2].exercises}
        
        
      />

      
    </div>
  );
};

export default App;
