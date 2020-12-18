import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


//All pages are impported here
import Navbar from './Components/Navbar/Navbar'

//Card components
import Cards1 from './Components/Card1/Cards1';
import Allstudents from './Components/ECE/Allstudents';

//Form components
import Form from './Components/Home/Form';
import ShowButtononHover from './Components/Modal/Form/ShowButtononHover';
import Component6 from './Components/Facebookstory_component/Component6';

//About us
import About from './Components/About/About';


import './App.css';

function App() {
  return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
              <Route path='/' exact component={Form} /> 
              <Route path='/card' component={Cards1} />
              <Route path='/students' component={Allstudents} />
              <Route path='/inputform' component={ShowButtononHover} />
              <Route path='/fbstory' component={Component6} />
              <Route path='/about' component={About} />

          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
