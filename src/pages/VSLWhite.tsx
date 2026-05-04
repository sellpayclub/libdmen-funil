import { ShieldCheck, Activity, Droplet } from 'lucide-react';

export default function VSLWhite() {
  return (
    <div className="min-h-screen bg-stone-50 pb-10 flex flex-col items-center">
      {/* Top Banner */}
      <div className="w-full bg-stone-900 text-stone-200 text-center py-3 px-4 font-medium text-sm border-b border-stone-800">
        Apresentação Oficial: Suplementação Natural e Qualidade de Vida.
      </div>
      
      {/* Main Container */}
      <div className="max-w-5xl w-full mx-auto px-4 pt-10 flex-1">
        {/* Headline - White Hat, Compliant */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-stone-900 leading-tight mb-4 tracking-tight drop-shadow-sm font-heading">
          A Fórmula Natural Para o Seu <span className="text-blue-700 underline decoration-blue-200 underline-offset-4">Bem-Estar Diário</span>
        </h1>
        <p className="text-center text-stone-600 mb-12 sm:text-lg font-medium px-2 max-w-3xl mx-auto leading-relaxed">
          O LibidMen é uma combinação exclusiva de ativos minuciosamente selecionados para auxiliar homens na manutenção da saúde, vitalidade e melhoria na disposição geral, de forma totalmente natural e aprovada.
        </p>

        {/* Pricing Table / Kits - Direct Sale */}
        <div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">Como você deseja iniciar seu acompanhamento?</h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">Selecione o kit adequado para a sua necessidade. A recomendação padrão de uso é de 3 meses.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-end mb-24 max-w-md lg:max-w-none mx-auto">
          
          {/* Kit 1 */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Kit Básico</h3>
                <p className="text-stone-500 font-bold mb-6">Tratamento de 1 mês</p>
                
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
               <a href="https://seguro.vitago-suplements.shop/r/70ME8V8Q78" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-xl shadow-lg shadow-stone-900/20 transition-all text-lg tracking-wide uppercase">
                 Adquirir Agora
               </a>
             </div>
          </div>

          {/* Kit 3 (Most Popular) */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(37,99,235,0.2)] border-4 border-blue-600 overflow-hidden flex flex-col relative z-20 transform lg:-translate-y-4">
             <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2.5 font-black text-sm tracking-widest uppercase shadow-md">
               ESCOLHA IDEAL
             </div>
             <div className="p-6 sm:p-8 text-center pt-16 bg-stone-50/50">
                <h3 className="text-3xl font-black font-heading text-stone-900 mb-2">Tratamento de 3 Meses</h3>
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-800 font-black text-sm px-4 py-1.5 rounded-full inline-block border border-blue-200">
                    Compre 2 e Leve 3
                  </span>
                </div>
                
                <div className="h-64 bg-white rounded-2xl mb-6 p-2 flex items-center justify-center shadow-sm border border-stone-100">
                   <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3%20potes.png" alt="3 potes LibidMen" className="object-contain h-full w-full" />
                </div>

                <div className="mb-2 flex items-baseline justify-center gap-2">
                  <span className="text-lg text-stone-400 font-semibold line-through">R$ 381,00</span>
                </div>
                <div className="mb-2 flex items-baseline justify-center text-blue-700 drop-shadow-sm">
                  <span className="text-3xl font-bold">R$</span>
                  <span className="text-6xl font-black tracking-tight">197</span>
                  <span className="text-2xl font-bold">,00</span>
                </div>
                <p className="text-base text-stone-700 font-bold mb-4 bg-blue-50 rounded-lg py-2 border border-blue-100">
                  R$ 65,66 / frasco
                </p>
             </div>
             <div className="p-6 sm:px-8 sm:pb-8 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/L2JD6XGPTC" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-4 sm:py-5 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] transition-all uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
                 <span className="text-lg sm:text-xl">Adquirir Tratamento de 3 Meses</span>
                 <span className="text-xs text-blue-100 mt-1 uppercase font-bold opacity-90">Opção Recomendada</span>
               </a>
             </div>
          </div>

          {/* Kit 6 */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col group relative">
             <div className="p-6 sm:p-8 text-center bg-stone-50/50">
                <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">Tratamento Extensivo</h3>
                <p className="text-green-700 font-bold mb-6 text-sm bg-green-50 inline-block px-3 py-1 rounded-full border border-green-200">Tratamento de 6 Meses</p>
                
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
                <p className="text-sm text-stone-700 mb-4 font-bold bg-stone-100/80 rounded-lg py-2 border border-stone-200/60">R$ 41,16 por frasco (Melhor Custo)</p>
             </div>
             <div className="p-6 bg-white">
               <a href="https://seguro.vitago-suplements.shop/r/5NKDYAECY1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-xl shadow-lg shadow-stone-900/20 transition-all text-lg tracking-wide uppercase">
                 Adquirir Agora
               </a>
             </div>
          </div>

        </div>

        {/* Ingredients / Features Component */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-200 p-6 sm:p-10 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10 text-stone-900 font-heading">
            O que faz a nossa fórmula ser única?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image Placeholder */}
            <div className="relative group mx-auto w-full max-w-sm lg:max-w-none">
               <img 
                 src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1%20pote%20libdmen.png" 
                 alt="Laboratório" 
                 className="rounded-3xl shadow-lg w-full object-contain h-full min-h-[300px] border border-stone-100 bg-stone-50 p-6 transition-transform duration-500 group-hover:scale-[1.02]"
               />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-2xl shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2 font-heading tracking-tight">Arginina Funcional</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Atua como auxiliar na manutenção do fluxo saudável, permitindo maior disposição durante o seu dia a dia.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-2xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2 font-heading tracking-tight">Beta-Alanina</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Um composto natural aliado na redução da fadiga. Ajuda a prolongar o vigor nas atividades físicas e de rotina.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-2xl shrink-0">
                  <Droplet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2 font-heading tracking-tight">Complexo Vitamínico</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Minerais e compostos que atuam na defesa e imunidade do homem, proporcionando longevidade ao corpo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10 mx-auto max-w-4xl mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-full md:w-2/5 shrink-0">
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/especialista%20libmen.png" alt="Especialista" className="w-full h-auto rounded-[2rem] object-cover shadow-lg border-4 border-stone-50" />
            </div>
            <div className="w-full md:w-3/5 space-y-4">
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-stone-900 tracking-tight">O Especialista Responsável</h3>
              <p className="text-lg text-blue-700 font-bold bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl inline-block">Pesquisador de Saúde Natural</p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-stone-100 text-stone-600 p-2 rounded-full shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 leading-relaxed">Desenvolveu esta formulação baseada em anos de estudos sobre nutrientes essenciais masculinos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-stone-100 text-stone-600 p-2 rounded-full shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 leading-relaxed">Já orientou processos de melhora de qualidade de vida para centenas de pacientes através da nutrição.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER & FACEBOOK DISCLAIMERS */}
      <footer className="w-full bg-stone-900 text-stone-400 py-12 px-4 text-xs font-medium text-center border-t border-stone-800">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook / Meta Platforms, Inc. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e apresentar dados reais do nosso produto de forma transparente.
          </p>
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            "FACEBOOK" é uma marca comercial registrada da FACEBOOK, Inc. e as diretrizes e regras são cuidadosamente respeitadas. Não vendemos seu e-mail ou qualquer informação para terceiros. Os resultados variam de pessoa para pessoa e o uso deste produto não substitui acompanhamento médico adequado.
          </p>
          <p className="opacity-80">
            Pirataria é crime, a venda só pode ser realizada através deste site oficial. <br/>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-4 text-[10px] text-stone-500">
            <a href="#" className="hover:text-stone-300">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
