import React from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="larger-screens">
          <Home />
        </div>
        <div className="mobile-screens">
          <p>This is for Mobile Screens</p>
        </div>
      </div>
  );
}

export default App;
