import React , {useEffect } from "react";
import Card from "../Cardcomponents/Card";
import contacts from "../../contacts";
// import "./styles.css";

function Company(props) {
  const [companies,setCompanies] = React.useState(contacts['company']);
  //console.log(student);
     
//   useEffect ( () =>{
//     getStudents();
//   },[]);

//   const getStudents = async () => {
//     const response = await fetch('http://localhost:5000/students');
//     const data = response.json();
//     console.log(data);
//   };

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
        {companies.map(company => (
          <Card
            key={company.id}
            name={company.name}
            img={company.imgURL}
            tel={company.phone}
            email={company.email}
          />
        ))}
        </div>
    </div>
  );
}

export default Company;