const fs = require('fs');
let content = fs.readFileSync('src/pages/VSL.tsx', 'utf8');

const targetStr = '{/* Como funciona / Passos */}';
const targetIndex = content.indexOf(targetStr);

const newSection = `
          {/* Para Quem É / Para Quem Não É */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {/* Para Quem É */}
            <div className="bg-green-50/50 p-6 sm:p-8 rounded-3xl border border-green-200">
              <h3 className="text-2xl font-black text-green-900 mb-2 font-heading tracking-tight">Para Quem É o LibidMen</h3>
              <p className="text-stone-600 mb-6 font-medium text-sm">Funciona se você for um desses casos:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Tem mais de 40 anos e percebeu que a ereção não é mais a mesma</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Sente vontade mas o corpo não responde na hora H</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Precisa de muito estímulo pra conseguir uma ereção parcial e dura pouco tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Parou de acordar com ereção matinal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Já usou azulzinho e tadala e parou de funcionar com o tempo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Tem próstata inflamada e dificuldade de ereção junto</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" strokeWidth={3} /></div>
                  <span className="text-stone-800 font-medium">Quer tratar a causa de verdade sem depender de remédio pra sempre</span>
                </li>
              </ul>
            </div>

            {/* Para Quem NÃO É */}
            <div className="bg-red-50/50 p-6 sm:p-8 rounded-3xl border border-red-200">
              <h3 className="text-2xl font-black text-red-900 mb-2 font-heading tracking-tight">Para Quem NÃO É</h3>
              <p className="text-stone-600 mb-6 font-medium text-sm">O LibidMen não é pra você se:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1 shrink-0">
                    <svg className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="text-stone-800 font-medium">Você quer resultado em 24 horas — isso é remédio, não tratamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1 shrink-0">
                    <svg className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="text-stone-800 font-medium">Você não está disposto a usar por pelo menos 30 dias seguidos para tratar o problema real</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1 shrink-0">
                    <svg className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="text-stone-800 font-medium">Você quer continuar dependendo do azulzinho e não quer mudar isso</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1 shrink-0">
                    <svg className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="text-stone-800 font-medium">Sua disfunção tem causa psicológica diagnosticada — nesse caso o problema não está nas artérias</span>
                </li>
              </ul>
            </div>
          </div>\n\n          `;

if (targetIndex !== -1) {
    content = content.substring(0, targetIndex) + newSection + content.substring(targetIndex);
    fs.writeFileSync('src/pages/VSL.tsx', content, 'utf8');
}
