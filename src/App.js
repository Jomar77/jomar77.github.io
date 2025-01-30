import logo from './logo.svg';
import './main.css';
import './App.css';
import './js/main.js';

import Layout from './components/Layout.js';
import ProjectDetails from './components/ProjectDetails.js';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
 
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:year" element={<ProjectDetails />} />
      </Routes>

  );
}

export default App;
