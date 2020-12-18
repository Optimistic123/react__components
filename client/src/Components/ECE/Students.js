import React , {useEffect } from "react";
import Card from "../Cardcomponents/Card";
import contacts from "../../contacts";
// import "./styles.css";

function Students(props) {
  const [students,setStudents] = React.useState(contacts['student']);
  const [company,setCompany] = React.useState(contacts['company']);
  //console.log(student);
     
  useEffect ( () =>{
    getStudents();
  },[]);

  const getStudents = async () => {
    const response = await fetch('http://localhost:5000/students');
    const data = response.json();
    console.log(data);
  };

  // const getStudents = async e => {
  //   e.preventDefault();
  //   try {
  //       const response = await fetch(`http://localhost:5000/students`);
  //       console.log(response);  
  //   } catch (error) {
  //       console.log(error);
  //   }
    
  // };
  
  return (
    <div className='app_students'>
        <div>
          <h1 className="heading">{props.branch}</h1>
        </div>
        <div className='cardstudent_row'>
        {students.map(student => (
          <Card
            key={student.id}
            name={student.name}
            img={student.imgURL}
            tel={student.phone}
            email={student.email}
          />
        ))}
        </div>
    </div>
  );
}

export default Students;