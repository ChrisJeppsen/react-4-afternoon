import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Switch, Route} from 'react-router-dom';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/classlist/:class' component={ClassList}/>
        <Route path='/student/:studentInfo' component={Student}/>
     

    </Switch>
)
