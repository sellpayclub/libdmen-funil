import { ArrowRight, CheckCircle2, ShieldCheck, Timer, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const CUSTOMER_PHOTOS = [
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/2cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/4cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/5cliente.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6cliente.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/7cliente.jpg"
];

export default function Sales() {
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const firstCard = carouselRef.current.children[0] as HTMLElement;
          const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 364;
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pb-20 font-sans">
      
      {/* Header */}
      <div className="bg-red-700 text-white text-center py-2.5 px-4 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md">
        <ShieldCheck className="w-4 h-4" /> COMPRA 100% SEGURA E DISCRETA
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-10">
        
        {/* Results Overview */}
        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6 mx-auto md:mx-0 w-max">
              <CheckCircle2 className="w-4 h-4" /> Análise Concluída
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-4 font-heading leading-[1.1] text-center md:text-left drop-shadow-sm">
              Sua fórmula personalizada está pronta.
            </h1>
            
            <p className="text-stone-600 mb-8 sm:mb-10 text-center md:text-left text-lg">Com base nas suas respostas, o sistema científico identificou o protocolo exato para reativar seu fluxo sanguíneo:</p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto md:mx-0">
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">Nível de obstrução:</span>
                  <span className="text-stone-600">Moderado a avançado</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">Déficit de Óxido Nítrico:</span>
                  <span className="text-stone-600">Marcador Confirmado</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">Dose de Arginina:</span>
                  <span className="text-stone-600">Concentração elevada ajustada</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">Dose de Feno-grego:</span>
                  <span className="text-stone-600">Dose máxima para elevação</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">Perfil Metábólico:</span>
                  <span className="text-stone-600">Complexo de absorção rápida</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3 text-red-900 bg-red-50 px-5 py-3 rounded-xl border border-red-100 font-semibold shadow-sm w-full sm:w-auto">
                <Timer className="w-6 h-6 text-red-600 shrink-0" /> 
                <span className="flex-1 text-center sm:text-left">Resultados Iniciais em: <strong className="text-red-700">11 a 18 dias!</strong></span>
              </div>
              <div className="flex items-center gap-3 text-green-900 bg-green-50 px-5 py-3 rounded-xl border border-green-200 font-semibold shadow-sm w-full sm:w-auto">
                <ShieldCheck className="w-6 h-6 text-green-600 shrink-0" /> 
                <span className="flex-1 text-center sm:text-left">Recomendado: <strong className="text-green-700">Tratamento de 3 meses para tratamento 100%</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">Escolha o Melhor Protocolo Para Você</h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">Recomendamos o uso contínuo de 3 a 6 meses para reativação total do fluxo sanguíneo.</p>
        </div>

        {/* Pricing Table / Kits */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-end mb-24 max-w-md lg:max-w-none mx-auto">
          
          {/* Kit 1 */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Tratamento Básico</h3>
                <p className="text-stone-500 font-bold mb-6">Kit 1 mês</p>
                
                <div className="h-56 bg-white rounded-2xl mb-6 p-4 flex items-center justify-center shadow-sm border border-stone-100 transition-transform group-hover:scale-105">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png" alt="1 pote LibidMen" className="object-contain h-full w-full" />
                </div>

                <div className="mb-2 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 197,00</span>
                </div>
                <div className="mb-6 flex items-baseline justify-center text-stone-900 drop-shadow-sm">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">127</span>
                  <span className="text-xl font-bold">,00</span>
                </div>
             </div>
             <div className="p-6 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/70ME8V8Q78" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-xl shadow-lg shadow-stone-900/20 transition-all text-lg uppercase tracking-wide">
                 Comprar Agora
               </a>
             </div>
          </div>

          {/* Kit 3 (Most Popular) */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(220,38,38,0.3)] border-4 border-red-600 overflow-hidden flex flex-col relative z-20 transform lg:-translate-y-4">
             <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2.5 font-black text-sm tracking-widest uppercase shadow-md">
               MAIS RECOMENDADO E VENDIDO
             </div>
             <div className="p-6 sm:p-8 text-center pt-16 bg-stone-50/50">
                <h3 className="text-3xl font-black font-heading text-stone-900 mb-2">Kit 3 Meses</h3>
                <div className="mb-6">
                  <span className="bg-red-100 text-red-700 font-black text-sm px-4 py-1.5 rounded-full inline-block border border-red-200">
                    Leve 2 + 1 GRÁTIS
                  </span>
                </div>
                
                <div className="h-64 bg-white rounded-2xl mb-6 p-2 flex items-center justify-center shadow-sm border border-stone-100">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3%20potes.png" alt="3 potes LibidMen" className="object-contain h-full w-full" />
                </div>

                <div className="mb-2 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 381,00</span>
                </div>
                <div className="mb-2 flex items-baseline justify-center text-red-600 drop-shadow-sm">
                  <span className="text-3xl font-bold">R$</span>
                  <span className="text-6xl font-black tracking-tight">197</span>
                  <span className="text-2xl font-bold">,00</span>
                </div>
                <p className="text-base text-stone-700 font-bold mb-4 bg-red-100/50 rounded-lg py-2 border border-red-100">
                  Apenas R$ 65,66 por frasco!
                </p>
             </div>
             <div className="p-6 sm:px-8 sm:pb-8 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/L2JD6XGPTC" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-black py-4 sm:py-5 rounded-2xl shadow-[0_10px_20px_-10px_rgba(22,163,74,0.6)] transition-all uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
                 <span className="text-lg sm:text-xl">Comprar Kit 3 Meses</span>
                 <span className="text-xs text-green-100 mt-1 uppercase font-bold opacity-90">Desconto Aplicado</span>
               </a>
             </div>
          </div>

          {/* Kit 6 */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Tratamento Avançado</h3>
                <p className="text-green-600 font-bold mb-6 text-sm bg-green-50 inline-block px-3 py-1 rounded-full border border-green-200">Leve 3 + 2 Grátis</p>
                
                <div className="h-56 bg-white rounded-2xl mb-6 p-4 flex items-center justify-center shadow-sm border border-stone-100 transition-transform group-hover:scale-105">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6%20potes.png" alt="6 potes LibidMen" className="object-contain h-full w-full" />
                </div>

                <div className="mb-2 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 635,00</span>
                </div>
                <div className="mb-2 flex items-baseline justify-center text-stone-900 drop-shadow-sm">
                  <span className="text-2xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">247</span>
                  <span className="text-xl font-bold">,00</span>
                </div>
                <p className="text-sm text-stone-700 mb-4 font-bold bg-stone-100/80 rounded-lg py-2 border border-stone-200/60">R$ 41,16 por frasco (Maior Desconto)</p>
             </div>
             <div className="p-6 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/5NKDYAECY1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-xl shadow-lg shadow-stone-900/20 transition-all text-lg uppercase tracking-wide">
                 Comprar Kit 6 Meses
               </a>
             </div>
          </div>

        </div>

        {/* Carousel Real Customers */}
        <div className="mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-4xl h-full bg-gradient-to-r from-red-50 to-orange-50 rounded-[3rem] -z-10 -skew-y-2 opacity-50"></div>
          
          <div className="text-center mb-10 relative z-10 pt-10 px-2 sm:px-0">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current drop-shadow-sm" />)}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-4 font-heading tracking-tight drop-shadow-sm">Homens Reais. <span className="text-red-600">Resultados Reais.</span></h2>
            <p className="text-stone-600 sm:text-lg font-medium max-w-2xl mx-auto">Mais de 12.500 homens já recuperaram a potência e a confiança. Veja quem testou e aprovou a eficácia do LibidMen.</p>
          </div>
          
          <div className="relative">
             <div ref={carouselRef} className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 snap-x snap-mandatory hide-scrollbars px-4 sm:px-10 -mx-4 sm:mx-0">
               {CUSTOMER_PHOTOS.map((img, i) => (
                 <div key={i} className="w-[85vw] sm:w-[340px] aspect-square rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-xl border border-stone-200/60 bg-stone-100 relative group">
                   <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`Cliente Satisfeito ${i+1}`} loading="lazy" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full">
                     <div className="flex items-center gap-2 text-white/90 text-[13px] sm:text-sm font-bold bg-black/40 w-max px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                       <CheckCircle2 className="w-4 h-4 text-green-400" /> Compra Verificada
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-stone-900 text-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 sm:gap-10 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-20 pointer-events-none -mt-40 -mr-40"></div>
          
          <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center border-8 border-stone-800 shadow-[0_0_40px_rgba(220,38,38,0.4)] relative z-10">
             <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-md" />
          </div>
          <div className="text-center md:text-left relative z-10 flex-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white mb-4 drop-shadow-sm tracking-tight uppercase">GARANTIA INCONDICIONAL DE 90 DIAS</h3>
            <p className="text-stone-300 sm:text-lg leading-relaxed font-medium">Você tem 3 meses para testar as cápsulas na sua casa. Se você não notar ereções mais firmes, aumento extremo da disposição e libido restaurada, nós devolvemos cada centavo do seu investimento.</p>
            <p className="text-stone-400 font-bold mt-4">✓ Risco ZERO e 100% Blindado.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
