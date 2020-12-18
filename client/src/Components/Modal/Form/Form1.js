import React from 'react'
import './Form.css';

const Form1 = ({style}) => {
  return (
    <div style={style} className='form1_header'>
      <form action="/submit" >
        <div class="label_input">
          <label style={{width:'120px'}} for="fname">First name:</label>
          <input style={{backgroundColor:'darkgray'}} type="text" name="First_Name" value=""></input>
        </div>
        <div class="label_input">
            <label style={{width:'120px'}} for="fname">Last name:</label>
            <input style={{backgroundColor:'darkgray'}} type="text"  name="Last_Name" value=""></input>
        </div>
        <div class="label_input">
            <label style={{width:'120px'}} for="lname">Date of Birth:</label>
            <input style={{backgroundColor:'darkgray'}} type="text"  name="DOB" value=""></input>
        </div>
        <div class="label_input">
            <label style={{width:'120px'}} for="lname">Email Id:</label>
            <input style={{backgroundColor:'darkgray'}} type="text" name="Email_ID" value=""></input>
        </div>
        <div class="label_input">
            <label style={{width:'120px'}} for="lname">Mobile Number:</label>
            <input style={{backgroundColor:'darkgray'}} type="nummber" name="Mobile_NO" value=""></input>
        </div>
        <div class="button_t">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </form> 
    </div> 
  )
}

export default Form1;