import React from 'react'
import Students from './Students'
import Company from './Company';

function Allstudents() {
  return (
    <div className='allstudents'>
        <input type='search' placeholder='search student' style={{marginLeft:'0px'}}></input>
        <Students branch={'ECE'} />
        <Company branch={'CSE'}/>
    </div>
  )
}

export default Allstudents
