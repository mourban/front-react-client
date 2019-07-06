import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';

import Navbar from './components/page/Navbar'
import Login from './components/user/Login';
import Add from './components/user/Add';
import Update from './components/user/Update';
import List from './components/user/List';
import AddTask from './components/task/AddTask';
import UpdateTask from './components/task/UpdateTask';
import ListTask from './components/task/ListTask';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Add} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add" component={Add} />
            <PrivateRoute exact path="/user/:id" component={Update} />
            <PrivateRoute exact path="/list" component={List} />
            <PrivateRoute exact path="/addTask" component={AddTask} />
            <PrivateRoute exact path="/task/:id" component={UpdateTask} />
            <PrivateRoute exact path="/listTask" component={ListTask} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
