import React, {useState} from "react";
import Form1 from './Form1';
import Form2 from './Form2';

//import CourseModal from './CourseModal';

export default function ShowButtonHover() {
    // const [style, setStyle] = useState({display: 'none'});
    const [style1, setStyle1] = useState({display: 'none'});
    const [style2, setStyle2] = useState({display: 'none'});
  

    const handleClick1= (e) =>{
        setStyle1({display: 'block'});setStyle2({display: 'none'});
    }
    const handleClick2= (e) =>{
        setStyle1({display: 'none'});setStyle2({display: 'block'});
    }

    return (
        <div className="App">
            <h2>Hidden Button in the box. Move mouse in the box</h2>
            <div>
                <div style={{display:'flex'}}>
                  <button style={{width:'100px',height:'40px'}} onClick={handleClick1}>Click</button>
                  <Form1 style={style1}/>
                </div>
                <div style={{display:'flex'}}>
                  <button style={{width:'100px',height:'40px'}} onClick={handleClick2}>Click</button>
                  <Form2 style={style2}/>
                </div>
            </div>
        </div>
    );
}
