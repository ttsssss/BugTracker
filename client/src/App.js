import React from 'react';
import '../src/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Preferences />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
