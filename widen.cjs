const fs = require('fs');

function widen(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // widen overall paddings
    content = content.replace(/px-6 py-10 md:p-12/g, "px-4 py-8 md:p-12");
    content = content.replace(/px-5 py-8 sm:p-10/g, "px-4 py-8 sm:p-10");
    content = content.replace(/px-5 py-10/g, "px-4 py-8");
    content = content.replace(/p-6 sm:p-10/g, "p-4 py-8 sm:p-10");
    content = content.replace(/p-6 sm:p-8/g, "p-4 sm:p-8");
    content = content.replace(/p-4 sm:p-6/g, "p-3 sm:p-6");
    
    fs.writeFileSync(file, content, 'utf8');
}

widen('src/pages/Quiz.tsx');
widen('src/pages/VSL.tsx');
widen('src/pages/Sales.tsx');
