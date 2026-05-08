const fs = require('fs');
let code = fs.readFileSync('src/pages/Sales.tsx', 'utf8');
code = code.replace(/\\n/g, '\n');
fs.writeFileSync('src/pages/Sales.tsx', code, 'utf8');
