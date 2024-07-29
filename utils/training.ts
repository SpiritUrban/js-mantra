interface ScriptLoadStatus {
    [key: string]: boolean;
  }
  
  const scriptStatus: ScriptLoadStatus = {
    mocha: false,
    chai: false,
    code: false,
    tests: false,
  };
  
  const loadScript = (src: string, statusKey: keyof ScriptLoadStatus, callback: () => void) => {
    if (!scriptStatus[statusKey]) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        scriptStatus[statusKey] = true;
        callback();
      };
      document.body.appendChild(script);
    } else {
      callback();
    }
  };
  
  export const addTestScripts = (callback: () => void) => {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.3/mocha.min.js', 'mocha', () => {
      window.mocha.setup('bdd');
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js', 'chai', () => {
        window.chai = window.chai;
        loadScript('/training/1/code.js', 'code', () => {
          loadScript('/training/1/tests.js', 'tests', callback);
        });
      });
    });
  };
  