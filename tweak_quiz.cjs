const fs = require('fs');
let content = fs.readFileSync('src/pages/Quiz.tsx', 'utf8');

const targetStr = `  if (!started) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center pt-20 px-3 sm:px-6 py-6 text-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg border border-stone-100 px-4 py-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-full blur-[60px] opacity-60 pointer-events-none"></div>
          
          <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png" alt="LibidMen" className="w-32 h-auto object-contain mx-auto mb-6 drop-shadow-xl relative z-10" />
          
          <h1 className="text-3xl font-bold font-heading mb-4 text-stone-900 relative z-10">Fórmula Personalizada LibidMen</h1>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed relative z-10">
            Responda com honestidade. Essas informações são confidenciais e serão usadas exclusivamente para calcular a proporção ideal de cada ingrediente da sua fórmula.
          </p>
          <button 
            onClick={handleStart}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-red-600/30 relative z-10 flex items-center justify-center gap-2"
          >
            Começar Análise <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }`;

const replacementStr = `  if (!started) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center pt-8 sm:pt-12 px-3 sm:px-6 py-6 text-center">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-stone-100 px-5 py-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
          
          <div className="mb-6 inline-flex items-center gap-2 bg-yellow-100/80 border border-yellow-200/50 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold relative z-10 drop-shadow-sm">
            <span className="text-lg">⚠️</span> Seus dados são 100% confidenciais
          </div>

          <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png" alt="LibidMen" className="w-48 sm:w-64 h-auto object-contain mx-auto mb-8 drop-shadow-2xl relative z-10" />
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading mb-4 text-stone-900 relative z-10 tracking-tight leading-tight">
            Descubra em 1 minuto se suas artérias penianas estão entupidas — e qual é a fórmula correta para o seu caso!
          </h1>
          <p className="text-stone-600 sm:text-lg mb-8 leading-relaxed relative z-10 font-medium">
            <strong className="text-stone-900">Mais de 12.500 homens já calcularam sua fórmula personalizada.</strong> Responda as perguntas abaixo com honestidade para que nosso sistema identifique seu nível de obstrução e calcule a concentração ideal de cada ingrediente.
          </p>
          <button 
            onClick={handleStart}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-red-600/40 relative z-10 flex items-center justify-center gap-2 uppercase tracking-wide hover:scale-[1.02]"
          >
            👇 Começar minha análise agora
          </button>
        </div>
      </div>
    );
  }`;

if (content.indexOf(targetStr) !== -1) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/pages/Quiz.tsx', content, 'utf8');
} else {
    console.error("Quiz target string not found");
}
