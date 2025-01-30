import { useEffect, useRef, useState } from 'react';

const useScrollex = (options) => {
  const elementRef = useRef(null);
  const [state, setState] = useState(null);

  const {
    top = 0,
    bottom = 0,
    mode = 'default',
    onEnter = null,
    onLeave = null,
    onInitialize = null,
    onTerminate = null,
    onScroll = null,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const calculateOffset = (value, elementHeight, viewportHeight) => {
      if (typeof value === 'string') {
        if (value.endsWith('%')) {
          return (parseFloat(value) / 100) * elementHeight;
        } else if (value.endsWith('vh')) {
          return (parseFloat(value) / 100) * viewportHeight;
        } else if (value.endsWith('px')) {
          return parseFloat(value);
        }
      }
      return value;
    };

    const testModes = {
      default: (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        viewportBottom >= elementTop && scrollY <= elementBottom,
      top: (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        scrollY >= elementTop && scrollY <= elementBottom,
      bottom: (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        viewportBottom >= elementTop && viewportBottom <= elementBottom,
      middle: (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        midY >= elementTop && midY <= elementBottom,
      'top-only': (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        elementTop >= scrollY && elementTop <= viewportBottom,
      'bottom-only': (scrollY, midY, viewportBottom, elementTop, elementBottom) =>
        elementBottom >= scrollY && elementBottom <= viewportBottom,
    };

    const onScrollHandler = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportBottom = scrollY + viewportHeight;
      const midY = scrollY + viewportHeight / 2;

      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop + calculateOffset(top, elementHeight, viewportHeight);
      const elementBottom = element.offsetTop + elementHeight - calculateOffset(bottom, elementHeight, viewportHeight);

      const isActive = testModes[mode](scrollY, midY, viewportBottom, elementTop, elementBottom);

      if (isActive !== state) {
        setState(isActive);
        if (isActive && onEnter) {
          onEnter(element);
        } else if (!isActive && onLeave) {
          onLeave(element);
        }
      }

      if (onScroll) {
        onScroll((midY - elementTop) / (elementBottom - elementTop));
      }
    };

    if (onInitialize) {
      onInitialize(element);
    }

    window.addEventListener('scroll', onScrollHandler);
    window.addEventListener('resize', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
      window.removeEventListener('resize', onScrollHandler);
      if (onTerminate) {
        onTerminate(element);
      }
    };
  }, [elementRef, state, top, bottom, mode, onEnter, onLeave, onInitialize, onTerminate, onScroll]);

  return elementRef;
};

export default useScrollex;
