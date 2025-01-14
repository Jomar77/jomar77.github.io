import logo from './logo.svg';
import './main.css';
import './App.css';
import './js/main.js';



import Banner from './components/Banner.js';
import Tiles from './components/Tiles.js';
import Layout from './components/Layout.js';

function App() {
  return (
    <div className="Body">
      <Layout>
      <Banner />
      <Tiles />
    </Layout>
    </div>
  );
}

export default App;
