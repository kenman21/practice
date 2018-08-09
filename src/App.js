import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container zero">
          <div className="box" id="1">
            <div className="text">
               div one
            </div>
          </div>
          <div className="box" id="2">
            <div className="text">
               div two
            </div>
          </div>
          <div className="box" id="3">
            <div className="text">
               div three
            </div>
          </div>
          <div className="box" id="4">
            <div className="text">
              div four
            </div>
          </div>
          <div className="box" id="5">
            <div className="text">
              div five
            </div>
          </div>
          <div className="box" id="6">
            <div className="text">
               div six
            </div>
          </div>
      </div>
    );
  }
}

export default App;
