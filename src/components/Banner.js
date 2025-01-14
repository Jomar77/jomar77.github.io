import React, { useEffect } from 'react';
import useScrollex from '../js/scrollex';

const Banner = () => {
  const bannerRef = useScrollex({
    bottom: '10px',
    onEnter: (element) => {
      const header = document.getElementById('header');
      header?.classList.add('alt');
    },
    onLeave: (element) => {
      const header = document.getElementById('header');
      header?.classList.remove('alt');
      header?.classList.add('reveal');
    },
    onTerminate: (element) => {
      const header = document.getElementById('header');
      header?.classList.remove('alt');
    },
  });

  return (
    <section id="banner" className="major" ref={bannerRef}>
      <div className="inner">
        <header className="major">
          <h1>Hi, my name is Forty</h1>
        </header>
        <div className="content">
          <p>A responsive site template by HTML5 UP</p>
          <ul className="actions">
            <li>
              <a href="#one" className="button next scrolly">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
