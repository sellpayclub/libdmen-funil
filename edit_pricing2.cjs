const fs = require('fs');

const kit6 = `
          {/* Kit 6 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Tratamento Avançado</h3>
                <div className="mb-4">
                  <p className="text-green-700 font-black text-sm bg-green-100 inline-block px-3 py-1 rounded-full border border-green-300">
                    Leve 3 + 2 Grátis
                  </p>
                </div>
                
                <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6%20potes.png" alt="6 potes LibidMen" className="object-contain h-full w-full drop-shadow-xl" />
                </div>

                <div className="mb-1 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 635,00</span>
                </div>
                <div className="mb-4 flex items-baseline justify-center text-stone-900 drop-shadow-sm">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">247</span>
                  <span className="text-xl font-bold">,00</span>
                </div>
                <div className="text-sm text-stone-700 font-bold bg-stone-100/80 rounded-xl py-2 px-4 shadow-sm inline-block border border-stone-200/60 w-full">
                  Apenas R$ 41,16 por frasco!
                </div>
             </div>
             <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/5NKDYAECY1" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 6 Meses")} className="flex items-center justify-center w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-lg shadow-stone-900/20 transition-all text-lg uppercase tracking-wide hover:scale-105">
                 Comprar Kit 6 Meses
               </a>
             </div>
          </div>
`;

const kit3 = `
          {/* Kit 3 (Most Popular) */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(220,38,38,0.4)] border-[5px] border-red-600 overflow-hidden flex flex-col relative z-20 transform lg:-translate-y-6">
             <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 font-black text-[13px] sm:text-sm tracking-widest uppercase shadow-md leading-relaxed px-2 z-10">
               ESTE É O KIT MAIS RECOMENDADO MUNDIALMENTE
             </div>
             <div className="p-6 sm:p-8 text-center pt-20 sm:pt-20 bg-stone-50/50 flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent opacity-50 pointer-events-none"></div>
                <h3 className="text-3xl sm:text-4xl font-black font-heading text-stone-900 mb-2 relative z-10">Kit 3 Meses</h3>
                <div className="mb-4 relative z-10">
                  <span className="bg-red-100 text-red-700 font-black text-sm px-4 py-1.5 rounded-full inline-block border border-red-300 shadow-sm">
                    Leve 2 + 1 GRÁTIS
                  </span>
                </div>
                
                <div className="h-64 sm:h-72 bg-white rounded-3xl mb-6 p-2 flex items-center justify-center shadow-inner border border-stone-100 relative z-10 transition-transform duration-300 hover:scale-105">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3%20potes.png" alt="3 potes LibidMen" className="object-contain h-full w-full drop-shadow-2xl" />
                </div>

                <div className="mb-1 flex items-baseline justify-center gap-2 relative z-10">
                  <span className="text-lg text-red-300 font-bold line-through drop-shadow-sm">R$ 381,00</span>
                </div>
                <div className="mb-4 flex items-baseline justify-center text-red-600 drop-shadow-md relative z-10">
                  <span className="text-3xl sm:text-4xl font-bold">R$</span>
                  <span className="text-6xl sm:text-7xl font-black tracking-tight">197</span>
                  <span className="text-2xl font-bold">,00</span>
                </div>
                <div className="text-base sm:text-lg text-red-800 font-bold bg-white rounded-xl py-3 px-4 shadow-sm inline-block border border-red-200 w-full relative z-10">
                  Apenas R$ 65,66 por frasco!
                </div>
             </div>
             <div className="p-6 sm:p-8 sm:pb-10 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/L2JD6XGPTC" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 3 meses")} className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-black py-5 sm:py-6 rounded-2xl shadow-[0_15px_30px_-10px_rgba(22,163,74,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.8)] transition-all uppercase tracking-wider scale-100 hover:scale-[1.03] active:scale-[0.98]">
                 <span className="text-lg sm:text-xl md:text-2xl drop-shadow-md">GARANTIR MEU KIT 3 MESES!</span>
                 <span className="text-xs sm:text-sm text-green-100 mt-1 uppercase font-bold opacity-90 drop-shadow-sm">✅ Desconto Aplicado com Sucesso</span>
               </a>
             </div>
          </div>
`;

const kit1 = `
          {/* Kit 1 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-2">Tratamento Básico</h3>
                <div className="flex flex-col gap-2 items-center mb-6">
                  <span className="text-stone-600 font-bold">Kit 1 mês</span>
                  <span className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-xl font-bold border border-red-200 mx-2 leading-tight">
                    Apenas experimentar, não indicado para seu caso
                  </span>
                </div>
                
                <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png" alt="1 pote LibidMen" className="object-contain h-full w-full drop-shadow-md opacity-90" />
                </div>

                <div className="mb-1 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 197,00</span>
                </div>
                <div className="mb-6 flex items-baseline justify-center text-stone-900 drop-shadow-sm">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">127</span>
                  <span className="text-xl font-bold">,00</span>
                </div>
             </div>
             <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/70ME8V8Q78" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 1 mês")} className="flex items-center justify-center w-full text-center bg-stone-200 hover:bg-stone-300 text-stone-600 font-black py-4 rounded-2xl transition-all text-lg uppercase tracking-wide hover:scale-105">
                 Comprar Agora
               </a>
             </div>
          </div>
`;

const wrapperOpen = '<div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 items-stretch mb-24 max-w-md md:max-w-3xl lg:max-w-none mx-auto px-4 sm:px-0 mt-8">';
const wrapperClose = '</div>';

const fullGridBlock = [wrapperOpen, kit6, kit3, kit1, wrapperClose].join("\\n");

let content = fs.readFileSync('src/pages/Sales.tsx', 'utf8');

let out = '';
let searchStr = '{/* Pricing Table / Kits */}';
let idx1 = content.indexOf(searchStr);
if (idx1 !== -1) {
   let endIdx1 = content.indexOf('{/* Como funciona / Passos */}', idx1);
   if (endIdx1 !== -1) {
      let before = content.substring(0, idx1);
      let after = content.substring(endIdx1);
      out = before + '{/* Pricing Table / Kits */}\\n' + fullGridBlock + '\\n\\n        ' + after;
   }
}

if (out !== '') {
   let idx2 = out.indexOf(searchStr, idx1 + searchStr.length + fullGridBlock.length);
   if (idx2 !== -1) {
      let endIdx2 = out.indexOf('{/* FOOTER */}', idx2);
      if (endIdx2 !== -1) {
         let before2 = out.substring(0, idx2);
         let after2 = out.substring(endIdx2);
         
         // we want to cut out until the last div before footer
         // because after pricing table there's a </div> for the main container
         let betweenText = out.substring(before2.length, endIdx2);
         let lastDivIdx = betweenText.lastIndexOf('</div>');
         if (lastDivIdx !== -1) {
             out = before2 + '{/* Pricing Table / Kits */}\\n' + fullGridBlock + '\\n\\n      ' + betweenText.substring(lastDivIdx) + after2;
         } else {
             out = before2 + '{/* Pricing Table / Kits */}\\n' + fullGridBlock + '\\n\\n      ' + after2;
         }
      } else {
         let before2 = out.substring(0, idx2);
         // Just replace the remaining if footer is not there, but it must be there
      }
   }
   
   fs.writeFileSync('src/pages/Sales.tsx', out, 'utf8');
   console.log('Successfully replaced pricing tables. Matches found: 2');
} else {
   console.log('Failed to find structure to replace.');
}
