import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import History from '../../components/History/History'
import Contact from '../../components/Contact/Contact'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'><h3>About</h3></Link>
          <Link to='/about/history' className='subnav_links'><h3>History</h3></Link>
          <Link to='/about/contact'className='subnav_links'><h3>Contact</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Route exact path='/about' 
            render={() => (
              <div>
                <p>Sup boys, its ABOUT time</p>
              </div>
              )} 
              />
            <Route exact path='/about/history' component={History}/>
            <Route exact path='/about/contact' component={Contact}/>
             
               
            />
          </Switch>
        </div>
      </div>
    )
  }
}