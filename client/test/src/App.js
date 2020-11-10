import React , {useState , useEffect , useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import TabPanel from './TablePanel'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  return (


    <Router>
      <Route exact path ='/' component= {TabPanel} />
    </Router>

  );
}

export default App;
