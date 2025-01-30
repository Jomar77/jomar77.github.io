import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/_Cosmeownaut"
              className="fa brands icon solid alt fa-twitter"
              aria-label="Follow me on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_cheshire.art/"
              className="fa brands icon solid alt fa-instagram"
              aria-label="Follow me on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/Jomar77"
              className="fa brands icon solid alt fa-github"
              aria-label="View my projects on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jomnacorda/"
              className="fa brands icon solid alt fa-linkedin"
              aria-label="Connect with me on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
