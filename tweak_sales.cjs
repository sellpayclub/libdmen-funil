const fs = require('fs');

let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

// Title 1
content = content.replace(
    '<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6 mx-auto md:mx-0 w-max">',
    '<div className="flex justify-center md:justify-start w-full mb-4">\n              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">'
);
content = content.replace(
    '<CheckCircle2 className="w-4 h-4" /> Análise Concluída\n            </div>',
    '<CheckCircle2 className="w-4 h-4" /> Análise Concluída\n              </div>\n            </div>'
);

content = content.replace(
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-6 font-heading leading-[1.1] text-center md:text-left drop-shadow-sm">',
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-2 sm:mb-4 font-heading leading-[1.1] text-center md:text-left drop-shadow-sm">'
);

content = content.replace(
    '<div className="flex justify-center mb-10 w-full">',
    '<div className="flex justify-center mb-4 sm:mb-6 w-full">'
);

content = content.replace(
    '<p className="text-stone-600 mb-8 sm:mb-10 text-center md:text-left text-lg">',
    '<p className="text-stone-600 mb-6 sm:mb-8 text-center md:text-left text-lg">'
);

/// Update texts!
const oldTexts = `<div className="mt-10 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3 text-red-900 bg-red-50 px-4 py-3 rounded-xl border border-red-100 font-semibold shadow-sm w-full sm:w-auto">
                <Timer className="w-6 h-6 text-red-600 shrink-0" /> 
                <span className="flex-1 text-center sm:text-left">Resultados Iniciais em: <strong className="text-red-700">11 a 18 dias!</strong></span>
              </div>
              <div className="flex items-center gap-3 text-green-900 bg-green-50 px-4 py-3 rounded-xl border border-green-200 font-semibold shadow-sm w-full sm:w-auto">
                <ShieldCheck className="w-6 h-6 text-green-600 shrink-0" /> 
                <span className="flex-1 text-center sm:text-left">Recomendado: <strong className="text-green-700">Tratamento de 3 meses para cura 100%</strong></span>
              </div>
            </div>`;

const newTexts = `<div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-100 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-red-900 bg-red-50 px-6 py-4 rounded-[1.5rem] border-2 border-red-200 font-bold shadow-sm w-full text-center">
                <Timer className="w-8 h-8 text-red-600 shrink-0 mb-2 sm:mb-0" /> 
                <span className="flex-1 text-lg sm:text-xl md:text-2xl">Resultados Iniciais em: <strong className="text-red-700 block sm:inline">11 a 18 dias!</strong></span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-green-900 bg-green-50 px-6 py-4 rounded-[1.5rem] border-2 border-green-300 font-bold shadow-sm w-full text-center">
                <ShieldCheck className="w-8 h-8 text-green-600 shrink-0 mb-2 sm:mb-0" /> 
                <span className="flex-1 text-lg sm:text-xl md:text-2xl text-stone-800">Recomendado: <strong className="text-green-700 block sm:inline">Tratamento de 3 meses para cura 100%</strong></span>
              </div>
            </div>`;

content = content.replace(oldTexts, newTexts);

fs.writeFileSync('src/pages/Sales.tsx', content, 'utf8');
