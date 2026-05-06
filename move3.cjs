const fs = require('fs');

const path = './src/pages/Sales.tsx';
let content = fs.readFileSync(path, 'utf8');

const startMarker = '{/* Como funciona / Passos */}';
const endMarker = '{/* Pricing Table / Kits */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const block = content.substring(startIndex, endIndex);
    
    // Remove the block
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Insert it after the pricing table. Let's find where Pricing Table ends.
    // Let's insert it before {/* Video Testimonial Antes do Carrossel */}
    const insertMarker = '{/* Video Testimonial Antes do Carrossel */}';
    
    const insertIndex = content.indexOf(insertMarker);
    if (insertIndex !== -1) {
        content = content.substring(0, insertIndex) + block + '\n        ' + content.substring(insertIndex);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Block moved successfully.");
    } else {
        console.log("Could not find insert marker.");
    }
} else {
    console.log("Could not find block markers.");
}
