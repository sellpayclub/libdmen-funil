import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Droplet } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';

export default function VSL() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-3 px-4 font-medium text-sm">
        Atenção: Assista ao vídeo abaixo com som ligado e veja como restaurar sua função natural.
      </div>
      
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-stone-900 leading-tight mb-4 tracking-tight drop-shadow-sm font-heading">
          O Tratamento Definitivo Para Reativar Suas <span className="text-red-700 underline decoration-red-200 underline-offset-4">Ereções Naturais</span>
        </h1>
        <p className="text-center text-stone-600 mb-8 sm:text-lg font-medium px-2">
          O Mecanismo Simples Que O LibidMen Usa Para Combater a Verdadeira Causa da Disfunção
        </p>

        {/* Video 1 */}
        <div className="mb-10 bg-black rounded-lg shadow-2xl overflow-hidden shadow-red-900/10">
          <VideoPlayer 
            playerId="69f7dfddac9b67e415cfdec5"
            smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"
            scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
            aspectRatioPadding="56.25%" /* Usually VSLs are 16:9, but user code had 100%. I will use 56.25% which is standard, but the user code had width max 400px with 100% padding. Meaning it's square/vertical? I'll use 100% to match user payload but center it nicely */
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* CTA 1 */}
        <div className="flex justify-center mb-16 lg:mb-20 px-2 sm:px-0">
          <Link to="/quiz" className="w-full sm:w-auto bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black text-[clamp(1rem,4vw,1.3rem)] py-5 px-6 sm:px-10 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.8)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
            <span className="flex-1 text-center sm:flex-none">Gerar Minha Fórmula</span> 
            <ArrowRight className="w-6 h-6 shrink-0" />
          </Link>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-red-50 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 text-stone-900 font-heading">Por que o LibidMen é diferente da maioria?</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8 mb-10 text-center relative shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-red-800 mb-4 uppercase tracking-wide">Produto Exclusivo e Sob Medida</h3>
            <p className="text-stone-700 sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              O LibidMen <strong>NÃO É um suplemento genérico</strong> de prateleira de farmácia. Ele é um composto com ingredientes naturais <strong className="text-red-700 bg-red-100 px-2 py-1 rounded inline-block mt-1 sm:mt-0 shadow-sm border border-red-200">manipulados e dosados INDIVIDUALMENTE para o seu caso</strong>, após uma criteriosa avaliação do seu perfil e histórico.
            </p>
          </div>

          {/* Comparativo */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 relative z-10 w-full">
            {/* Outros */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-stone-200 p-2 rounded-full px-4 text-stone-600 font-black">OUTROS</div>
                <h3 className="text-lg font-bold text-stone-500 leading-tight">Medicamentos e Suplementos Genéricos</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-stone-400 font-bold text-xl mt-[-2px]">❌</span> <span className="text-stone-600 font-medium">Oferecem <strong>risco direto</strong> à sua saúde cardiovascular</span></li>
                <li className="flex items-start gap-3"><span className="text-stone-400 font-bold text-xl mt-[-2px]">❌</span> <span className="text-stone-600 font-medium">Só funcionam <strong>temporariamente</strong> (efeitoinderela)</span></li>
                <li className="flex items-start gap-3"><span className="text-stone-400 font-bold text-xl mt-[-2px]">❌</span> <span className="text-stone-600 font-medium"><strong>Doses genéricas:</strong> a mesma para você e para um idoso de 80 anos</span></li>
                <li className="flex items-start gap-3"><span className="text-stone-400 font-bold text-xl mt-[-2px]">❌</span> <span className="text-stone-600 font-medium">Efeito cessa a longo prazo, seu corpo cria resistência</span></li>
                <li className="flex items-start gap-3"><span className="text-stone-400 font-bold text-xl mt-[-2px]">❌</span> <span className="text-stone-600 font-medium"><strong>Não curam nada</strong>, apenas mascaram e tratam o sintoma momentâneo</span></li>
              </ul>
            </div>

            {/* LibidMen */}
            <div className="bg-gradient-to-b from-stone-900 to-black text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-stone-800 transform md:-translate-y-2">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600 rounded-full blur-[70px] opacity-20 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="bg-red-600 p-2 rounded-full px-4 text-white font-black shadow-lg shadow-red-600/30 tracking-wide">LIBIDMEN</div>
                <h3 className="text-lg font-bold text-stone-200">Tratamento Definitivo</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3"><span className="text-green-500 font-bold text-xl mt-[-2px]">✓</span> <span className="text-white font-bold">100% Natural e Seguro <span className="text-stone-400 text-sm font-medium block sm:inline">(sem risco cardíaco)</span></span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 font-bold text-xl mt-[-2px]">✓</span> <span className="text-stone-300 font-medium">Trata a <strong>raiz do problema</strong> reativando o sistema natural</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 font-bold text-xl mt-[-2px] animate-pulse">✓</span> <span className="font-bold text-white"><strong className="text-red-400">Dose Manipulada Individualmente</strong> baseada no seu corpo</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 font-bold text-xl mt-[-2px]">✓</span> <span className="text-stone-300 font-medium">Devolve sua autonomia orgânica a longo prazo</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 font-bold text-xl mt-[-2px]">✓</span> <span className="text-stone-300 font-medium"><strong>Cura e restaura</strong> os canais cavernosos do pênis</span></li>
              </ul>
            </div>
          </div>

          {/* Como funciona / Passos */}
          <div className="mb-16 relative z-10 bg-stone-50 p-6 md:p-10 rounded-3xl border border-stone-100">
            <h3 className="text-2xl font-black text-center mb-10 text-stone-900 uppercase tracking-tight">Como funciona a fabricação?</h3>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Linha conectora (Desktop) */}
              <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-1.5 bg-stone-200 rounded-full z-0"></div>
              
              {/* Passo 1 */}
              <div className="relative z-10 text-center flex flex-col items-center group">
                <div className="w-24 h-24 bg-white border-4 border-stone-200 text-stone-400 group-hover:border-red-600 group-hover:text-red-600 rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-sm transition-all duration-300 relative">
                  1
                </div>
                <h4 className="font-black text-lg text-stone-900 mb-2">Sua Avaliação</h4>
                <p className="text-stone-600 text-sm px-2">Você responde as perguntas do nosso checklist para avaliarmos seu grau e sua fisiologia exata.</p>
              </div>

              {/* Passo 2 */}
              <div className="relative z-10 text-center flex flex-col items-center group">
                <div className="w-24 h-24 bg-white border-4 border-stone-200 text-stone-400 group-hover:border-red-600 group-hover:text-red-600 rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-sm transition-all duration-300 relative">
                  2
                </div>
                <h4 className="font-black text-lg text-stone-900 mb-2">Manipulação no Laboratório</h4>
                <p className="text-stone-600 text-sm px-2">Nossa equipe recebe seus dados e prepara os ingredientes <strong className="text-red-700">na dosagem isolada perfeita</strong> para o seu corpo.</p>
              </div>

              {/* Passo 3 */}
              <div className="relative z-10 text-center flex flex-col items-center group">
                <div className="w-24 h-24 bg-red-700 border-4 border-red-500 text-white rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-transform duration-300 group-hover:scale-110 relative">
                  3
                </div>
                <h4 className="font-black text-lg text-stone-900 mb-2">Tratamento Pronto!</h4>
                <p className="text-stone-600 text-sm px-2">Sua fórmula exclusiva fica pronta na hora e nosso centro logístico a despacha discretamente para o seu endereço.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-stone-900">Ingredientes Manipulados Para o Seu Perfil</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Image Placeholder */}
            <div className="relative group mx-auto w-full max-w-sm lg:max-w-none">
               <img 
                 src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1%20pote%20libdmen.png" 
                 alt="Laboratório LibidMen" 
                 className="rounded-3xl shadow-2xl w-full object-contain h-full min-h-[350px] border border-stone-50 bg-stone-50 p-6 transition-transform duration-500 group-hover:scale-[1.02]"
               />
               <div className="absolute inset-x-4 bottom-4 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl flex items-center justify-center p-4 shadow-lg border border-red-500/30">
                 <p className="text-white font-bold text-sm sm:text-base text-center tracking-wide">Dosagem Personalizada e Única</p>
               </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 sm:p-6 rounded-2xl hover:bg-red-50/50 transition-colors border border-stone-100 hover:border-red-100">
                <div className="bg-gradient-to-br from-red-100 to-red-200 text-red-700 p-3.5 rounded-2xl h-fit shrink-0 shadow-inner">
                  <Activity className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-stone-900 mb-2 font-heading tracking-tight">1 - Arginina <span className="text-red-600 text-sm italic font-medium">(Dose Calculada)</span></h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">Converte em óxido nítrico no corpo de acordo com a sua necessidade → relaxa os vasos → aumenta o fluxo de sangue → <strong className="text-stone-900">ereção mais rápida e duradoura</strong>.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 sm:p-6 rounded-2xl hover:bg-red-50/50 transition-colors border border-stone-100 hover:border-red-100">
                <div className="bg-gradient-to-br from-red-100 to-red-200 text-red-700 p-3.5 rounded-2xl h-fit shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-stone-900 mb-2 font-heading tracking-tight">2 - Beta-Alanina <span className="text-red-600 text-sm italic font-medium">(Dose Certa para Você)</span></h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">Combate a acidez muscular e fadiga baseada no seu nível de esforço → <strong className="text-stone-900">mantém a ereção mais firme</strong> e resistente por mais tempo, sem falhas.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 sm:p-6 rounded-2xl hover:bg-red-50/50 transition-colors border border-stone-100 hover:border-red-100">
                <div className="bg-gradient-to-br from-red-100 to-red-200 text-red-700 p-3.5 rounded-2xl h-fit shrink-0 shadow-inner">
                  <Droplet className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-stone-900 mb-2 font-heading tracking-tight">3 - Feno-grego <span className="text-red-600 text-sm italic font-medium">(Ajuste Individual)</span></h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">Calculado para a sua idade para aumentar a testosterona livre ideal → eleva a libido → <strong className="text-stone-900">faz você se sentir com a vitalidade dos 20 anos.</strong></p>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mt-6 border-t border-stone-100 pt-6 relative z-10">
             <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 sm:p-6 rounded-2xl hover:bg-red-50/50 transition-colors border border-stone-100 hover:border-red-100 h-full">
                <div className="bg-gradient-to-br from-red-100 to-red-200 text-red-700 p-3.5 rounded-2xl h-fit shrink-0 shadow-inner">
                  <Activity className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-stone-900 mb-2 font-heading tracking-tight">4 - Piridoxina <span className="text-red-600 text-sm italic font-medium">(Dose Otimizada)</span></h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">Produz neurotransmissores exatos para o seu cérebro → aumenta o controle → <strong className="text-stone-900">regula os hormônios de forma adaptada ao seu perfil.</strong></p>
                </div>
             </div>
             <div className="flex flex-col sm:flex-row items-start gap-4 bg-stone-50 p-5 sm:p-6 rounded-2xl hover:bg-red-50/50 transition-colors border border-stone-100 hover:border-red-100 h-full">
                <div className="bg-gradient-to-br from-red-100 to-red-200 text-red-700 p-3.5 rounded-2xl h-fit shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-stone-900 mb-2 font-heading tracking-tight">5 - Complexo Vitamínico <span className="text-red-600 text-sm italic font-medium">(Sob Medida)</span></h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">Vitaminas manipuladas para suprir apenas o que o seu corpo precisa hoje → <strong className="text-stone-900">potencializa os outros ingredientes.</strong></p>
                </div>
             </div>
          </div>
        </div>

        {/* Mechanism / Graph */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
             <h2 className="text-2xl md:text-4xl font-bold font-heading">O Mecanismo de Ação</h2>
             <p className="text-stone-300 text-lg">O LibidMen potencializa e estimula a produção de <strong>ÓXIDO NÍTRICO</strong> no seu corpo, que é responsável por aumentar o fluxo sanguíneo que promove ereção e desentupir as veias!</p>
             
             {/* Simple visual graph representation */}
             <div className="flex items-end justify-center h-40 gap-4 mt-8 mb-4 border-b border-stone-700 pb-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-8 bg-stone-700 rounded-t-sm flex items-end justify-center"><span className="text-xs mb-1">Baixo</span></div>
                  <span className="text-xs text-stone-400">Antes</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-32 bg-red-600 rounded-t-sm flex items-end justify-center transition-all group-hover:h-36"><span className="text-xs mb-1 font-bold">ALTO</span></div>
                  <span className="text-xs text-stone-300 font-medium">Com LibidMen</span>
                </div>
             </div>
             
             <ul className="text-left max-w-md mx-auto space-y-3 text-stone-300">
               <li className="flex items-center gap-2"><span className="text-red-500 font-bold">✕</span> Sem óxido nítrico = sem fluxo de sangue.</li>
               <li className="flex items-center gap-2"><span className="text-red-500 font-bold">✕</span> Sem sangue o suficiente e com baixa pressão = Impotência!</li>
               <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Óxido nítrico liberado naturalmente = Potência e Ereções fortes e duradouras!</li>
             </ul>
             
             <div className="bg-stone-800 p-4 rounded-lg mt-6 italic border-l-4 border-red-500">
               "O Mecanismo do LibidMen é similar ao de estimulantes sintéticos famosos, PORÉM de forma NATURAL e não apenas temporária e superficial. O LibidMen ESTIMULA A PRODUÇÃO NATURAL do seu corpo e por isso é o tratamento DEFINITIVO."
             </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 sm:p-10 mx-auto max-w-4xl mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-full md:w-2/5 shrink-0">
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/especialista%20libmen.png" alt="Dr Juan Carlos Reviera" className="w-full h-auto rounded-[2rem] object-cover shadow-lg border-4 border-stone-50" />
            </div>
            <div className="w-full md:w-3/5 space-y-4">
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-stone-900 tracking-tight">Dr. Juan Carlos Reviera</h3>
              <p className="text-lg sm:text-xl text-red-600 font-bold bg-red-50 border border-red-100 px-4 py-2 rounded-xl inline-block">Especialista em Saúde Masculina</p>
              <ul className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-stone-700 sm:text-lg leading-relaxed"><strong className="text-stone-900">Criador do LibidMen</strong>: Desenvolvedor da fórmula revolucionária para reativação do fluxo sanguíneo peniano.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-stone-700 sm:text-lg leading-relaxed">Já ajudou <strong className="text-stone-900">mais de 12.500 homens</strong> a eliminar a Disfunção Erétil definitivamente.</span>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-stone-700 sm:text-lg leading-relaxed">Autor Best Seller com <strong className="text-stone-900">mais de 12 livros publicados</strong> sobre saúde integrativa masculina.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video 2 - Testimonial */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-4">Veja O Que Eles Estão Dizendo</h2>
          <p className="text-stone-600 mb-8">Nossos clientes compartilham seus resultados com o tratamento</p>

          <div className="max-w-sm mx-auto bg-black rounded-lg shadow-xl overflow-hidden mb-12">
            <VideoPlayer 
              playerId="69f7eec8f44bf91afda981d5"
              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"
              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
              aspectRatioPadding="180%" // As requested for vertical video
            />
          </div>

          {/* Final CTA */}
          <div className="flex justify-center px-2 sm:px-0 mt-8">
            <Link to="/quiz" className="w-full sm:w-auto bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black text-[clamp(1rem,4vw,1.3rem)] py-5 px-6 sm:px-10 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.8)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
              <span className="flex-1 text-center sm:flex-none">Gerar Minha Fórmula</span> 
              <ArrowRight className="w-6 h-6 shrink-0" />
            </Link>
          </div>
        </div>

      </div>
      
      {/* Dev Link to Page 2 */}
      <div className="w-full text-center py-6 mt-8">
        <Link to="/white" className="text-stone-400 text-xs hover:text-stone-600 underline">Acessar Página 02 (White)</Link>
      </div>
    </div>
  );
}
