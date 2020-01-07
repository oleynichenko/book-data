const fs = require(`fs`);

const data = {
  a1: require(`articles/pticha/ru-zh/pticha-ru-zh-41`),
  a2: require(`articles/pticha/ru-zh/pticha-ru-zh-42`),
  a3: require(`articles/pticha/ru-zh/pticha-ru-zh-43`),
  a4: require(`articles/pticha/ru-zh/pticha-ru-zh-44`),
  a5: require(`articles/pticha/ru-zh/pticha-ru-zh-45`),
  a6: require(`articles/pticha/ru-zh/pticha-ru-zh-46`),
  a7: require(`articles/pticha/ru-zh/pticha-ru-zh-47`),
  a8: require(`articles/pticha/ru-zh/pticha-ru-zh-48`),
  a9: require(`articles/pticha/ru-zh/pticha-ru-zh-49`),
  a10: require(`articles/pticha/ru-zh/pticha-ru-zh-50`),
};

let articles = '';

for(let i = 1; i <= 10; i++) {
  articles = articles + JSON.stringify(data[`a${i}`]).slice(1,-1) + '\n';
}

fs.writeFileSync('./toimport.json', '');
fs.writeFileSync('./toimport.json', articles);

