const fs = require('fs');

const path = './src/pages/VSL.tsx';
let content = fs.readFileSync(path, 'utf8');

const startMarker = '{/* Doctor Info */}';
const endMarker = '{/* Video 2 - Testimonial */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const block = content.substring(startIndex, endIndex);
    
    // Remove the block
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Insert after "Como funciona a fabricação?"
    // The "Como funciona / Passos" block ends where? 
    // It is inside the Veja O Que Eles Estão Dizendo section? Let's verify where to put it.
    // Let's just put it right before {/* Final CTA */}
    const insertMarker = '{/* Final CTA */}';
    
    const insertIndex = content.indexOf(insertMarker);
    if (insertIndex !== -1) {
        content = content.substring(0, insertIndex) + block + '\n        ' + content.substring(insertIndex);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Block moved successfully.");
    } else {
        console.log("Could not find insert position.");
    }
} else {
    console.log("Could not find block to move.");
}
