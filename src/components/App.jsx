import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
// import GroupDetailsPage from "./GroupDetailsPage";
import HomePage from "./HomePage";

function App()
{
  return (
    <Router>
      <div className="d-flex">
          <div className='col-auto'>
            <Sidebar/>
            {/* <HomePage/> */}
          </div>
          <div>
           <Routes>
              
              <Route exact path="/" element={<Dash /> } component={Dash} ></Route>
              <Route path="/HomePage" element={<HomePage /> } component={HomePage} ></Route>
              {/* <Route path="/group/:groupId" component={GroupDetailsPage} /> */}
              {/* Add other routes as needed */}
           
            </Routes>
             
          </div>
      </div>
    </Router>
    
  )
  };

  export default App;


  function Dash(){
    return <h1>Filtered dashboard</h1>
    }