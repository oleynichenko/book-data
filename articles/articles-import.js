const fs = require(`fs`);

const data = {
  a1: require(`./foreword-tes/ru-zh/foreword-tes-ru-zh-1`),
  a2: require(`./foreword-tes/ru-zh/foreword-tes-ru-zh-2`),
  a3: require(`./foreword-tes/ru-bb/foreword-tes-ru-bb-1`),
  a4: require(`./foreword-tes/ru-bb/foreword-tes-ru-bb-2`),
  a5: require(`./foreword-tes/he-bs/foreword-tes-he-bs-1`),
  a6: require(`./foreword-tes/he-bs/foreword-tes-he-bs-2`),
  a7: require(`./foreword-tes/en-bb/foreword-tes-en-bb-1`),
  a8: require(`./foreword-tes/en-bb/foreword-tes-en-bb-2`),
};

let articles = '';

for(let i = 1; i <= 8; i++) {
  articles = articles + JSON.stringify(data[`a${i}`]).slice(1,-1) + '\n';
}

fs.writeFileSync('./toimport.json', '');
fs.writeFileSync('./toimport.json', articles);

