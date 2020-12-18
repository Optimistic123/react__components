import { TableRow } from '@material-ui/core';
import React from 'react';
import './Modal.css';
import Form1 from '../Modal/Form/Form1';
import Form2 from '../Modal/Form/Form2';

const Modal = ({ show, close }) => {
    const [style1,setStyle1] = React.useState({display:'none'})
    const [style2,setStyle2] = React.useState({display:'none'})

    const Changestyle1 = () =>{
        setStyle1({display:'block'});
        setStyle2({display:'none'})
    }
    const Changestyle2 = () =>{
        setStyle1({display:'none'});
        setStyle2({display:'block'})
    }
  return (
    <div className="modal-wrapper" style={{ transform: show ? 'translateY(0vh)' : 'translateY(-100vh)', opacity: show ? '1' : '0' }}>
     
      <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>

      <div className="modal-content">
        
    
        <div className="modal-body">
          {/* <h4>Modal</h4> */}
          <div className='modalbody_left'>
          <p onClick={Changestyle1}>Intern</p>
          <p onClick={Changestyle2}>Blog</p>
          <p >Summer</p>
          <p>Podcast</p>
          </div>
          <div className='modalbody_left'>
              <Form1 style={style1} />
              <Form2 style={style2} />
          </div>
        </div>







        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;