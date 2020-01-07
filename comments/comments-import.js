const fs = require(`fs`);

const data = {
  // a1: require(`./pticha/os-ru-zh/41`),
  // a2: require(`./pticha/os-ru-zh/42`),
  // a3: require(`./pticha/os-ru-zh/43`),
  // a4: require(`./pticha/os-ru-zh/44`),
  // a5: require(`./pticha/os-ru-zh/45`),
  // a6: require(`./pticha/os-ru-zh/46`),
  // a7: require(`./pticha/os-ru-zh/47`),
  // a8: require(`./pticha/os-ru-zh/48`),
  // a9: require(`./pticha/os-ru-zh/49`),
  // a10: require(`./pticha/os-ru-zh/50`),
  a11: require(`./pticha/ob-ru-zh/50`),
  a12: require(`./pticha/ob-ru-zh/45`),
};

let comments = '';

for(let prop in data) {
  comments = comments + JSON.stringify(data[prop]).slice(1,-1) + '\n';
}

fs.writeFileSync('./toimport.json', '');
fs.writeFileSync('./toimport.json', comments);

