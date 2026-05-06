const fs = require('fs');
let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');
const lines = content.split('\n');

const startIndex = lines.findIndex(l => l.includes('<h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900 mb-2">Relatos de quem tratou a Próstata com LibidMen</h3>'));
if (startIndex !== -1) {
    const blockStart = startIndex - 2; // `<div className="mt-16 space-y-6">`
    let openDivs = 0;
    let endIndex = -1;
    for (let i = blockStart; i < lines.length; i++) {
        if (lines[i].includes('<div')) {
           const matches = lines[i].match(/<div/g);
           openDivs += matches ? matches.length : 0;
        }
        if (lines[i].includes('</div')) {
           const matches = lines[i].match(/<\/div/g);
           openDivs -= matches ? matches.length : 0;
        }
        if (openDivs === 0) {
            endIndex = i;
            break;
        }
    }
    
    if (endIndex !== -1) {
        lines.splice(blockStart, endIndex - blockStart + 1);
        fs.writeFileSync('src/pages/Sales.tsx', lines.join('\n'), 'utf8');
        console.log("Removed prostate testimonials.");
    }
}
