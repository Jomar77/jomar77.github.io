import { useEffect } from 'react';

const useScrolly = (options) => {
  const {
    anchor = 'top',
    easing = 'easeInOutCubic',
    offset = 0,
    speed = 1000,
  } = options;

  const scrollToElement = (target) => {
    if (!target || typeof document === 'undefined') return;

    const element = document.querySelector(target);
    if (!element) return;

    const calculateOffset = () => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const anchorOffset =
        anchor === 'middle'
          ? rect.top + scrollTop - (window.innerHeight - element.offsetHeight) / 2
          : rect.top + scrollTop;

      return Math.max(anchorOffset - (typeof offset === 'function' ? offset() : offset), 0);
    };

    const start = window.pageYOffset;
    const end = calculateOffset();
    const distance = end - start;
    const startTime = performance.now();

    const easingFunctions = {
      linear: (t) => t,
      easeInOutCubic: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    };

    const ease = easingFunctions[easing] || easingFunctions.linear;

    const step = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / speed, 1);
      const easedProgress = ease(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const clickHandler = (event) => {
      const target = event.currentTarget.getAttribute('href');
      if (target && target.startsWith('#') && target.length > 1) {
        event.preventDefault();
        scrollToElement(target);
      }
    };

    const elements = document.querySelectorAll('[data-scrolly]');
    elements.forEach((element) => element.addEventListener('click', clickHandler));

    return () => {
      elements.forEach((element) => element.removeEventListener('click', clickHandler));
    };
  }, [anchor, easing, offset, speed]);

  return null;
};

export default useScrolly;
