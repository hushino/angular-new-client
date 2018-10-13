const math = require('./math');
const os = require('os');
const fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//console.log(os.arch());
//console.log(math.add(1,2))
