import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';

class App extends Component {
    render() {
        return (
          <body>
            <Header/>
            <div className="App" style={{ textAlign: 'center' }}>
              <h1>Hello World</h1>
              <p>Welcome to Kranti</p>
            </div>
          </body>
        );
    }
}

export default App;
