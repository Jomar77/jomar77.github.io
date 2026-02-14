import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isMenuVisible, setIsMenuVisible }) {
  return (
    <>
      <header id="header" className="alt">
        <Link to="/" className="logo">
          <strong>The Jomar</strong> <span>Project</span>
        </Link>
        <nav>
          <a href="#menu" onClick={(e) => {
            e.preventDefault();
            
            setIsMenuVisible(true);
            console.log(isMenuVisible);
          }}>Menu</a>
        </nav>
      </header>

      <nav id="menu" className={isMenuVisible ? 'visible' : 'invisible'}>
        <ul className="links">
          <li><Link to="/" onClick={() => setIsMenuVisible(false)}>Home</Link></li>
          <li><Link to="/Demo" onClick={() => setIsMenuVisible(false)}>Contacts</Link></li>
          <li><Link to="/Projects" onClick={() => setIsMenuVisible(false)}>Projects</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

