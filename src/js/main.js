import React, { useEffect } from 'react';
import breakpoints from './breakpoints';
import scrolly from './scrolly';
import scrollex from './scrollex';

const App = () => {

  useEffect(() => {
    // Breakpoints
    breakpoints({
      xlarge: ['1281px', '1680px'],
      large: ['981px', '1280px'],
      medium: ['737px', '980px'],
      small: ['481px', '736px'],
      xsmall: ['361px', '480px'],
      xxsmall: [null, '360px']
    });

    const $body = document.body;
    const $header = document.getElementById('header');
    const $banner = document.getElementById('banner');

    // Play initial animations on page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        $body.classList.remove('is-preload');
      }, 100);
    });

    // Clear transitioning state on unload/hide
    window.addEventListener('unload', () => {
      setTimeout(() => {
        document.querySelectorAll('.is-transitioning').forEach(el => {
          el.classList.remove('is-transitioning');
        });
      }, 250);
    });

    // Fix: Enable IE-only tweaks
    if (/MSIE|Trident|Edge/.test(window.navigator.userAgent)) {
      $body.classList.add('is-ie');
    }

    // Scrolly
    document.querySelectorAll('.scrolly').forEach(el => {
      scrolly(el, {
        offset: () => ($header ? $header.offsetHeight - 2 : 0),
      });
    });

    // Tiles
    document.querySelectorAll('.tiles > article').forEach($article => {
      const $image = $article.querySelector('.image');
      const $img = $image?.querySelector('img');
      const $link = $article.querySelector('.link');

      if ($img) {
        $article.style.backgroundImage = `url(${ $img.src })`;

        if ($img.dataset.position) {
          $image.style.backgroundPosition = $img.dataset.position;
        }

        $image.style.display = 'none';
      }

      if ($link) {
        const $primaryLink = $link.cloneNode(true);
        $primaryLink.classList.add('primary');
        $article.appendChild($primaryLink);

        [$link, $primaryLink].forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();

            if (link.target === '_blank') {
              window.open(link.href);
            } else {
              $article.classList.add('is-transitioning');
              document.getElementById('wrapper').classList.add('is-transitioning');
              setTimeout(() => {
                window.location.href = link.href;
              }, 500);
            }
          });
        });
      }
    });

    // Header and banner interactions
    if ($banner && $header && $header.classList.contains('alt')) {
      window.addEventListener('resize', () => window.dispatchEvent(new Event('scroll')));

      window.addEventListener('load', () => {
        scrollex($banner, {
          bottom: $header.offsetHeight + 10,
          terminate: () => $header.classList.remove('alt'),
          enter: () => $header.classList.add('alt'),
          leave: () => {
            $header.classList.remove('alt');
            $header.classList.add('reveal');
          },
        });

        setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);
      });
    }

    // Menu
    const $menu = document.getElementById('menu');
    if ($menu) {
      const $menuInner = document.createElement('div');
      $menuInner.classList.add('inner');
      while ($menu.firstChild) {
        $menuInner.appendChild($menu.firstChild);
      }
      $menu.appendChild($menuInner);

      let isLocked = false;

      const lockMenu = () => {
        if (isLocked) return false;
        isLocked = true;
        setTimeout(() => {
          isLocked = false;
        }, 350);
        return true;
      };

      const showMenu = () => {
        if (lockMenu()) $body.classList.add('is-menu-visible');
      };

      const hideMenu = () => {
        if (lockMenu()) $body.classList.remove('is-menu-visible');
      };

      const toggleMenu = () => {
        if (lockMenu()) $body.classList.toggle('is-menu-visible');
      };

      $menuInner.addEventListener('click', event => event.stopPropagation());
      $menuInner.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          hideMenu();
          setTimeout(() => {
            window.location.href = link.href;
          }, 250);
        });
      });

      $menu.addEventListener('click', event => {
        event.stopPropagation();
        event.preventDefault();
        hideMenu();
      });

      $body.addEventListener('click', hideMenu);
      $body.addEventListener('keydown', event => {
        if (event.keyCode === 27) hideMenu();
      });
    }
  }, []);

  return (
    <div id="wrapper">
      {/* Add your header, banner, tiles, and menu here */}
    </div>
  );
};

export default App;
