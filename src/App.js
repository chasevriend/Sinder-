import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import Chats from './Chats';
import './App.css';



function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<TinderCards />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
