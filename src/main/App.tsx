import React from 'react';
import '../css/App.css';

import Excel from "./component/Excel";

export default class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Excel />
        </div>
    );
  }
}
