const fs = require('fs');
let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

const startMarker = '<div className="mt-16 space-y-6">';
const searchString = 'Relatos de quem tratou a Próstata';

const startIndex = content.indexOf(startMarker, content.indexOf(searchString) - 500); 
const endIndex = content.indexOf('</div>\n              </div>\n            </div>\n          </div>\n        </div>', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    // We want to delete up to the close of <div className="mt-16 space-y-6"> but need to be careful with exact nested divs.
    // Let's just find the exact block and replace it.
    console.log("Found");
    
} else {
    console.log("Not found");
}
