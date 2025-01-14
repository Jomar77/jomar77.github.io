/* Converted breakpoints.js into a React-compatible utility */

const breakpoints = (() => {
    "use strict";
  
    const state = {
      list: null,
      media: {},
      events: [],
    };
  
    function init(breakpointsConfig) {
      state.list = breakpointsConfig;
      window.addEventListener("resize", poll);
      window.addEventListener("orientationchange", poll);
      window.addEventListener("load", poll);
      window.addEventListener("fullscreenchange", poll);
    }
  
    function active(query) {
      if (query in state.media) return window.matchMedia(state.media[query]).matches;
  
      let type, name;
      if (query.startsWith(">=")) {
        type = "gte";
        name = query.substr(2);
      } else if (query.startsWith("<=")) {
        type = "lte";
        name = query.substr(2);
      } else if (query.startsWith(">")) {
        type = "gt";
        name = query.substr(1);
      } else if (query.startsWith("<")) {
        type = "lt";
        name = query.substr(1);
      } else if (query.startsWith("!")) {
        type = "not";
        name = query.substr(1);
      } else {
        type = "eq";
        name = query;
      }
  
      const breakpoint = state.list[name];
  
      if (!breakpoint) {
        state.media[query] = false;
        return false;
      }
  
      const [min, max] = breakpoint;
      let rule = "";
  
      if (min != null && max != null) {
        switch (type) {
          case "gte":
            rule = `screen and (min-width: ${min}px)`;
            break;
          case "lte":
            rule = `screen and (max-width: ${max}px)`;
            break;
          case "gt":
            rule = `screen and (min-width: ${max + 1}px)`;
            break;
          case "lt":
            rule = `screen and (max-width: ${min - 1}px)`;
            break;
          case "not":
            rule = `screen and (max-width: ${min - 1}px), screen and (min-width: ${max + 1}px)`;
            break;
          default:
            rule = `screen and (min-width: ${min}px) and (max-width: ${max}px)`;
        }
      }
  
      state.media[query] = rule;
      return window.matchMedia(rule).matches;
    }
  
    function on(query, handler) {
      state.events.push({ query, handler, active: false });
      if (active(query)) handler();
    }
  
    function poll() {
      for (const event of state.events) {
        const isActive = active(event.query);
        if (isActive && !event.active) {
          event.active = true;
          event.handler();
        } else if (!isActive && event.active) {
          event.active = false;
        }
      }
    }
  
    return {
      init,
      active,
      on,
    };
  })();
  
  export default breakpoints;
  