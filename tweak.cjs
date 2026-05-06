const fs = require('fs');

function mobileTweak(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/-mx-6 /g, "-mx-4 ");
    content = content.replace(/-mx-5 /g, "-mx-4 ");
    content = content.replace(/px-5 /g, "px-4 ");
    fs.writeFileSync(file, content, 'utf8');
}

mobileTweak('src/pages/Sales.tsx');
mobileTweak('src/pages/VSL.tsx');
