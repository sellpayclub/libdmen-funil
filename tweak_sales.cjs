const fs = require('fs');
let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

content = content.replace(
  '<VideoPlayer \n              playerId="69f7eec8f44bf91afda981d5"\n              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"\n              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"\n              aspectRatioPadding="180%"\n            />',
  '<VideoPlayer \n              playerId="69fe24c669941ed24647bcfa"\n              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"\n              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"\n              aspectRatioPadding="100%"\n            />'
);

fs.writeFileSync('src/pages/Sales.tsx', content, 'utf8');
