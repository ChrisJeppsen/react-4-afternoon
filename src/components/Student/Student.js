import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfoObj: {}
    };
  }

    componentDidMount(){
      console.log(this.props.match.params.studentInfo)
      axios.get(`http://localhost:3005/students/${this.props.match.params.studentInfo}`).then(results => {
        console.log(results)
        this.setState({studentInfoObj: results.data})
      })
    }
  render() {
    return (
      <div className="box">
        <h1>{this.state.studentInfoObj.first_name} {this.state.studentInfoObj.last_name}</h1>
        <h3>Grade: {this.state.studentInfoObj.grade}</h3>
        <h3>Email: {this.state.studentInfoObj.email}</h3>
      </div>
    )
  }
}