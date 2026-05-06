const fs = require('fs');

let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

const titleBlockStr = `<div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">Escolha o Melhor Protocolo Para Você</h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">Recomendamos o uso contínuo de 3 a 6 meses para reativação total do fluxo sanguíneo.</p>
        </div>`;

// Check if it exists exactly
if (content.indexOf(titleBlockStr) !== -1) {
    // Remove it
    content = content.replace(titleBlockStr, '');
    
    // Insert it before {/* Pricing Table / Kits */}
    const targetString = '{/* Pricing Table / Kits */}';
    const targetIndex = content.indexOf(targetString);
    if (targetIndex !== -1) {
       content = content.substring(0, targetIndex) + titleBlockStr + '\n\n        ' + content.substring(targetIndex);
       fs.writeFileSync('src/pages/Sales.tsx', content, 'utf8');
       console.log("Moved title");
    } else {
       console.log("Target not found");
    }
} else {
    // maybe spacing is different
    const lines = content.split('\\n');
    const start = lines.findIndex(l => l.includes("Escolha o Melhor Protocolo Para Você"));
    if (start !== -1) {
       console.log("Found line");
    } else {
       console.log("Not found at all");
    }
}
