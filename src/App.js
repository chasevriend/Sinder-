import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>

        <Routes>
          <Route path='/' element={<TinderCards />}>
          </Route>
          
        </Routes>
        {/* Cards */}
        {/* Buttons below Cards */}

        {/* Chats Screen */}
        {/* Individual Chats Screen */}

      </Router>
    </div>
  );
}

export default App;
