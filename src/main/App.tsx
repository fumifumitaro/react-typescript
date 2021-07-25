import React from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

import Excel from "./component/Excel";

export default class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Excel />
          </header>
        </div>
    );
  }
}
