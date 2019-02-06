import React, { Component } from 'react';
import './App.css';
import CustomerDashboard from './Components/CustomerDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerDashboard />
      </div>
    );
  }
}

export default App;
