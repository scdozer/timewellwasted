import React from 'react';
import Header from './components/Header/header.js';
import VideoStream from './components/VideoStream'
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <VideoStream />
    </div>
  );
}

export default App;
