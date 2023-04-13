import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import './App.css';



function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<TinderCards />} />
          <Route path="/chats" element={<Chats />} />
          <Route path='/chats/:person' element={<ChatScreen />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
