const style = (color) => `color: ${color}; font-size: 12px; font-weight: bold`;

const debuggerHelper = {
  SUCCESS(text) {
    const SUCCESS = console.log("%cSUCCESS", style("green"));
    return console.log(`${SUCCESS}`, text);
  },
  WARNING(text) {
    return console.log(`%c${text}`, style("yellow"));
  },
  FAIL(text) {
    return console.log(`%c${text}`, style("red"));
  },
};

export default debuggerHelper;
