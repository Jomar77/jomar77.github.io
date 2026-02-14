
import './css/main.css';
import './css/index.css';
import './js/main.js';

import Layout from './components/Layout.js';
import ProjectDetails from './components/ProjectDetails.js';
import Showcase from './components/Projects_Page/Showcase.js';
import { createBrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/:year" element={<ProjectDetails />} />
      <Route path="/projects" element={<Showcase />} />
    </Routes>

  );
}

export default App;
