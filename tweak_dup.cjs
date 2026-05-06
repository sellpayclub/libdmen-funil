const fs = require('fs');
let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

const titleBlockStr = `<div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">Escolha o Melhor Protocolo Para Você</h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">Recomendamos o uso contínuo de 3 a 6 meses para reativação total do fluxo sanguíneo.</p>
        </div>`;

const startIdx = content.indexOf(titleBlockStr);

// The pricing table has 3 child divs (the 3 kits). Let's just find the closing tag for the pricing table wrapper grid.
// Wait, Pricing table starts after title:
/*
{/* Pricing Table / Kits *}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-8...
*/

// Let's do a reliable string match
const tableStartStr = '{/* Pricing Table / Kits */}';
const tableEndStr = '{/* Como funciona / Passos */}';

const startIndex = content.indexOf(titleBlockStr);
const endIndex = content.indexOf(tableEndStr);

if (startIndex !== -1 && endIndex !== -1) {
   const blockToDuplicate = content.substring(startIndex, endIndex);
   
   // find the word Guarantee
   const guaranteeStartStr = '{/* Guarantee */}';
   // find where guarantee ends
   const startG = content.indexOf(guaranteeStartStr);
   let openDivs = 0;
   
   const searchSub = content.substring(startG);
   const divRegex = /<div|<\/div/g;
   let result;
   let endG = -1;
   
   let firstFound = false;
   while ((result = divRegex.exec(searchSub)) !== null) {
       if (result[0] === '<div') {
           openDivs++;
           firstFound = true;
       } else if (result[0] === '</div') {
           openDivs--;
       }
       if (firstFound && openDivs === 0) {
           // We found the end of Guarantee block!
           // find the closing > for this </div
           const endPos = searchSub.indexOf('>', result.index);
           if (endPos !== -1) {
               endG = startG + endPos + 1;
               break;
           }
       }
   }
   
   if (endG !== -1) {
       // Insert it after Guarantee!
       content = content.substring(0, endG) + '\\n\\n        ' + blockToDuplicate + content.substring(endG);
       fs.writeFileSync('src/pages/Sales.tsx', content, 'utf8');
       console.log("Duplicated pricing section");
   } else {
       console.log("no endG found");
   }
} else {
   console.log("no block to duplicate found");
}
