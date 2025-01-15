import logo from './logo.svg';
import './main.css';
import './App.css';
import './js/main.js';

import Layout from './components/Layout.js';

function App() {
  return (
    <div className="Body">
      <Layout />

      <Router>
        <Routes>
          {/* Route for the main project tiles page */}
          <Route path="/" element={<Layout/>} />

          {/* Dynamic route for each year's project page */}
          <Route path="/:2021" element={<Page2021 />} />
        </Routes>
      </Router>
    </div>



  );
}

export default App;
