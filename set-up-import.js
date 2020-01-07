const fs = require(`fs`);

const data = {
  a1: require(`./articles/pticha/ru-zh/pticha-ru-zh-41.json`),
  a2: require(`./articles/pticha/ru-zh/pticha-ru-zh-42.json`),
  a3: require(`./articles/pticha/ru-zh/pticha-ru-zh-43.json`),
  a4: require(`./articles/pticha/ru-zh/pticha-ru-zh-44.json`),
  a5: require(`./articles/pticha/ru-zh/pticha-ru-zh-45.json`),
  a6: require(`./articles/pticha/ru-zh/pticha-ru-zh-46.json`),
  a7: require(`./articles/pticha/ru-zh/pticha-ru-zh-47.json`),
  a8: require(`./articles/pticha/ru-zh/pticha-ru-zh-48.json`),
  a9: require(`./articles/pticha/ru-zh/pticha-ru-zh-49.json`),
  a10: require(`./articles/pticha/ru-zh/pticha-ru-zh-50.json`),
};

let articles = '';

for(let i = 1; i <= 10; i++) {
  articles = articles + JSON.stringify(data[`a${i}`]).slice(1,-1) + '\n';
}

fs.writeFileSync('./toimport.json', '');
fs.writeFileSync('./toimport.json', articles);

