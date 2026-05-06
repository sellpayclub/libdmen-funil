const fs = require('fs');
let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');
const lines = content.split('\n');

const startIndex = lines.findIndex(l => l.includes('<h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900 mb-2">Relatos de quem tratou a Próstata com LibidMen</h3>'));
if (startIndex !== -1) {
    // go up 2 lines to find `<div className="mt-16 space-y-6">`
    const i = startIndex - 2;
    // Let's print around here to verify
    console.log(lines.slice(i, i+10).join('\n'));
}
