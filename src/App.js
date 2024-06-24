//import logo from './logo.svg';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
// import About from './about';
import TextForm from './TextForm';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom';


function App(){
  const[mode, setMode]= useState('light');
const[alert,setAlert]= useState(null);

 const showAlert=(message, type)=>{
setAlert({
  msg:message,
  type: type
})
setTimeout(() => {
  setAlert(null); 
},2000);

}

const toggleMode=()=>{
if(mode === 'light'){
setMode('dark');
document.body.style.backgroundColor = 'grey';
showAlert("dark mode has been enabled","success");
}
else{
  setMode('light');
document.body.style.backgroundColor = 'white';
showAlert("light mode has been enabled","success");

}
}

  return (
   <>
   {/* <Router> */}
    <Navbar title= "textutils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   {/*<Switch>*/}
         {/* <Route exact path="/about">
          <About />
          </Route>*/}
          {/*<Route exact path="/">*/}
           <TextForm showAlert={showAlert}  heading="Enter the text to Analyze Below"  mode={mode}  />
         {/*</Route>*/}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
   </>
  );
}

export default App;
