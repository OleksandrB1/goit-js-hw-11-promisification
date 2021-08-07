const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(ms); }, ms);
    });
  };

const outLog = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(outLog); // Resolved after 2000ms
delay(1000).then(outLog); // Resolved after 1000ms
delay(1500).then(outLog); // Resolved after 1500ms