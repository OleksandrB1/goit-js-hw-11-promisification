const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(ms); }, ms);
    });
  };
const outLog = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(outLog); 
delay(1000).then(outLog);
delay(1500).then(outLog);