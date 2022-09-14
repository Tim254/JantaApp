import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "./Home"
import Schedule from "./Schedule"
import UpdateCosts from "./UpdateCosts"
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'


import 'react-bootstrap'

function App() {
  const [costs,setCosts] = useState([])
  const [activities,setActivities] = useState([])
  const [employees,setEmployees] = useState([])

   useEffect(()=>{
        fetch(`https://janta-app.herokuapp.com/employees`)
            .then((r)=> r.json())
            .then((data)=> setEmployees(data))
   },[])

  useEffect(()=>{
    fetch("https://janta-app.herokuapp.com/activities")
      .then((r) => r.json())
      .then((data) => setActivities(data))
    fetch("https://janta-app.herokuapp.com/costs")
      .then((r) => r.json())
      .then((data) => setCosts(data));
    ;},[])

    
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/schedule">
          <Schedule activities={activities} setActivities={setActivities} setCosts={setCosts}/>
        </Route>
        <Route path="/update-costs">
          <UpdateCosts activities={activities} employees={employees} costs={costs} setCosts={setCosts}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
