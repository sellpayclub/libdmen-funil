const fs = require('fs');

const path = './src/pages/VSL.tsx';
let content = fs.readFileSync(path, 'utf8');

// The block to move starts with {/* Como funciona / Passos */} and ends just before {/* Mechanism / Graph */}
const startMarker = '{/* Como funciona / Passos */}';
const endMarker = '{/* Mechanism / Graph */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const block = content.substring(startIndex, endIndex);
    
    // Remove the block
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Find where to insert: below "Veja O Que Eles Estão Dizendo"
    // Let's insert it right after the VideoPlayer div ends
    const insertMarker = '<VideoPlayer \n              playerId="69f7eec8f44bf91afda981d5"\n              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"\n              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"\n              aspectRatioPadding="180%" // As requested for vertical video\n            />\n          </div>';
    
    const insertIndex = content.indexOf(insertMarker);
    if (insertIndex !== -1) {
        const fullInsertPos = insertIndex + insertMarker.length;
        content = content.substring(0, fullInsertPos) + '\n\n          ' + block + content.substring(fullInsertPos);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Block moved successfully.");
    } else {
        console.log("Could not find insert position.");
    }
} else {
    console.log("Could not find block to move.");
}
