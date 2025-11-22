// debug.js
window.runnerDebug = {
  log(...args) {
    console.log("[Runner Debug]", ...args);
  },
  warn(...args) {
    console.warn("[Runner Debug]", ...args);
  },
  group(name) {
    console.group("[Runner Debug]", name);
  },
  groupEnd() {
    console.groupEnd();
  }
};

// Banner so you know debug is active
console.info("Runner Debug enabled: fetch calls and blobMap activity will be logged.");
