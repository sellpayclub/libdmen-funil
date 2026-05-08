const fs = require('fs');
let code = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

// Target the price blocks specifically to improve their colors

// Kit 6 price color
code = code.replace(
  /<div className="mb-4 flex items-baseline justify-center text-stone-900 drop-shadow-sm">\s*<span className="text-2xl font-bold">R\$<\/span>\s*<span className="text-5xl font-black tracking-tight">247<\/span>/g,
  '<div className="mb-4 flex items-baseline justify-center text-green-700 drop-shadow-sm">\n                  <span className="text-2xl font-bold">R$</span>\n                  <span className="text-5xl font-black tracking-tight">247</span>'
);

// Kit 1 price color
code = code.replace(
  /<div className="mb-6 flex items-baseline justify-center text-stone-900 drop-shadow-sm">\s*<span className="text-2xl font-bold">R\$<\/span>\s*<span className="text-5xl font-black tracking-tight">127<\/span>/g,
  '<div className="mb-6 flex items-baseline justify-center text-stone-500">\n                  <span className="text-2xl font-bold">R$</span>\n                  <span className="text-5xl font-black tracking-tight">127</span>'
);

// Make Kit 1 fully gray/faded to really de-prioritize it
code = code.replace(
  /<h3 className="text-2xl font-bold font-heading text-stone-900 mb-2">Tratamento Básico<\/h3>/g,
  '<h3 className="text-2xl font-bold font-heading text-stone-500 mb-2">Tratamento Básico</h3>'
);

// Make Kit 6 title subtly green
code = code.replace(
  /<h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Tratamento Avançado<\/h3>/g,
  '<h3 className="text-2xl font-bold font-heading text-green-800 mb-1">Tratamento Avançado</h3>'
);

fs.writeFileSync('src/pages/Sales.tsx', code, 'utf8');
