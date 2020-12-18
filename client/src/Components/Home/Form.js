import React, { useState } from "react";
import './Form.css';
import axios from "axios";
// import Particlecomponent from './Particlecomponent';

function Form(props) {

  const [student ,setStudent] = useState({
      username :'',
      email:"",
      contactNo:"",
      cv:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setStudent(prevStudent => {
        return {
            ...prevStudent,
            [name]:value
        };
    });
   }

  // function submitStudent(event){
  //     //make all field empty again to enalble loading of other student
  //     console.log(student);
  //     axios.post('http://localhost:5000/students/add',student)
  //        .then(res => console.log(res.data));

  //     setStudent({
  //       username :'',
  //       email:"",
  //       contactNo:"",
  //       cv:"",
  //       buttonText:"submitted"
  //    });
  //    event.preventDefault();
  // }

  const submitStudent = async e => {
    e.preventDefault();
    setStudent({ ...student, buttonText: 'Submitting' });
    try {
        const response = await axios.post('http://localhost:5000/students/add',student)
        console.log(response);
        setStudent({
            ...student,
            username: '',
            email: '',
            contactNo: '',
            cv:""
        });
    } catch (error) {
        console.log(error);
    }
  };

  const registerForm = () => (
        <form onSubmit={submitStudent}>
            <h1>Hello { student.username }</h1>
              <div classNmae='register_form'>
              <input type="text" name="username" onChange={handleChange} value={student.username} placeholder="Name"/>
              <input  type="text"  name="email" onChange={handleChange} value={student.email} placeholder="Email" />
              <input  type="tel"  name="contactNo" onChange={handleChange} value={student.contactNo} placeholder="Contact NO." pattern="[1-9]{1}[0-9]{9}" />
              <input  type="text"  name="cv" onChange={handleChange} value={student.cv} placeholder="Resume/Cv" />
              <button>Submit</button>
            </div>
            
        </form>
   );

  return (
    <div className="container">
      {/* <div style={{position: "absolute",top:200,left: 0,width: "100%",height: "100%" }}> */}
        {/* <Particlecomponent /> */}
      {registerForm()}
  </div>
  );
}

export default Form;
