const fs = require('fs');
const lines = fs.readFileSync('src/pages/Sales.tsx', 'utf8').split('\n');
console.log(lines.slice(250, 310).join('\n'));
