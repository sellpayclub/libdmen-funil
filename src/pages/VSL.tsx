import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Droplet, CheckCircle2, Star } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';
import { useEffect } from 'react';
import { trackEvent, FunnelEvent } from '../lib/analytics';

export default function VSL() {
  useEffect(() => {
    trackEvent(FunnelEvent.VSL_VIEW);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pb-0">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-3 px-4 font-medium text-sm">
        Atenção: Assista ao vídeo abaixo com som ligado e veja como restaurar sua função natural.
      </div>
      
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-0 sm:px-6 pt-8">
        {/* Headline */}
        <div className="px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-stone-900 leading-tight mb-4 tracking-tight drop-shadow-sm font-heading">
            O Tratamento Definitivo Para Reativar Suas <span className="text-red-700 underline decoration-red-200 underline-offset-4">Ereções Naturais</span>
          </h1>
          <p className="text-center text-stone-600 mb-8 sm:text-lg font-medium">
            O Mecanismo Simples Que O LibidMen Usa Para Combater a Verdadeira Causa da Disfunção
          </p>
        </div>

        {/* Video 1 */}
        <div className="mb-10 bg-black sm:rounded-2xl shadow-2xl overflow-hidden shadow-red-900/10">
          <VideoPlayer 
            playerId="69f7dfddac9b67e415cfdec5"
            smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"
            scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
            aspectRatioPadding="56.25%" /* Usually VSLs are 16:9, but user code had 100%. I will use 56.25% which is standard, but the user code had width max 400px with 100% padding. Meaning it's square/vertical? I'll use 100% to match user payload but center it nicely */
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* CTA 1 */}
        <div className="flex justify-center mb-10 sm:mb-16 lg:mb-20 px-4 sm:px-0 mt-4">
          <Link to="/quiz" className="w-full sm:w-auto bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black text-[clamp(1rem,4vw,1.3rem)] py-5 px-6 sm:px-10 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.8)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
            <span className="flex-1 text-center sm:flex-none">Gerar Minha Fórmula</span> 
            <ArrowRight className="w-6 h-6 shrink-0" />
          </Link>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white px-4 py-8 sm:p-10 mb-16 relative sm:rounded-[2rem] sm:shadow-xl sm:border border-stone-100 overflow-hidden">
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
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="bg-stone-200 p-2 rounded-full px-4 text-stone-600 font-black shrink-0">OUTROS</div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-stone-500 leading-tight mb-3">Medicamentos e Suplementos Genéricos</h3>
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/potesoutros.png" alt="Outros Suplementos" className="w-48 md:w-56 h-auto object-contain mx-auto sm:mx-0 opacity-60" />
                </div>
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
            <div className="bg-gradient-to-b from-stone-900 to-black text-white rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden border border-stone-800 transform md:-translate-y-2">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600 rounded-full blur-[70px] opacity-20 pointer-events-none"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 relative z-10">
                <div className="bg-red-600 p-2 rounded-full px-4 text-white font-black shadow-lg shadow-red-600/30 tracking-wide shrink-0">LIBIDMEN</div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-stone-200 mb-3">Tratamento Definitivo</h3>
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png" alt="LibidMen" className="w-56 md:w-64 lg:w-72 h-auto object-contain mx-auto sm:mx-0 drop-shadow-2xl" />
                </div>
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

          {/* Mechanism / Graph */}
        <div className="bg-stone-900 text-white px-4 py-8 sm:p-8 mb-16 relative sm:rounded-2xl sm:shadow-xl overflow-hidden">
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
               <li className="flex items-center gap-2"><span className="text-red-500 font-bold shrink-0">✕</span> <span>Sem óxido nítrico = sem fluxo de sangue.</span></li>
               <li className="flex items-center gap-2"><span className="text-red-500 font-bold shrink-0">✕</span> <span>Sem sangue o suficiente e com baixa pressão = Impotência!</span></li>
               <li className="flex items-center gap-2"><span className="text-green-500 font-bold shrink-0">✓</span> <span>Óxido nítrico liberado naturalmente = Potência e Ereções fortes e duradouras!</span></li>
             </ul>
             
             <div className="bg-stone-800 p-4 rounded-lg mt-6 italic border-l-4 border-red-500 text-sm sm:text-base">
               "O Mecanismo do LibidMen é similar ao de estimulantes sintéticos famosos, PORÉM de forma NATURAL e não apenas temporária e superficial. O LibidMen ESTIMULA A PRODUÇÃO NATURAL do seu corpo e por isso é o tratamento DEFINITIVO."
             </div>
          </div>
        </div>

        {/* Prostate Section */}
        <div className="bg-white px-4 py-8 sm:p-8 md:p-12 mb-16 relative sm:rounded-3xl sm:shadow-xl sm:border border-stone-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6 font-heading tracking-tight leading-tight text-center">
              Tem <span className="text-blue-600">Próstata Inflamada?</span><br /> O LibidMen Foi Feito Para Você Também!
            </h2>
            
            <div className="space-y-4 text-stone-600 sm:text-lg font-medium md:leading-relaxed mb-10">
              <p>Se você tem dificuldade de urinar, acorda várias vezes à noite para ir ao banheiro, ou sente aquela sensação de que nunca esvazia completamente — saiba que isso <strong className="text-stone-900">não é só próstata</strong>.</p>
              
              <p>É o mesmo entupimento que está impedindo suas ereções. Próstata inflamada e disfunção erétil têm a mesma raiz: <strong className="text-stone-900">circulação comprometida na região pélvica</strong>. Quando o fluxo sanguíneo está reduzido nessa área, os dois problemas aparecem juntos — e pioram juntos.</p>
              
              <p>É por isso que homens com próstata inflamada quase sempre têm dificuldade de ereção também. Não é coincidência. É o mesmo problema se manifestando de duas formas diferentes.</p>
              
              <div className="-mx-4 sm:mx-0 my-8">
                <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/e5e2e7ca-4a14-4e0f-b66d-85fa9c024a58.png" alt="Comparação de Próstata" className="w-full h-auto max-w-4xl mx-auto sm:rounded-2xl shadow-md" />
              </div>
              
              <div className="bg-blue-50 p-4 sm:p-8 rounded-2xl border border-blue-100 my-8 shadow-sm">
                <h3 className="text-xl font-black text-blue-900 mb-6 font-heading">O que o LibidMen faz nesse caso é duplo:</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" strokeWidth={3} />
                    <span><strong className="text-blue-900 block mb-1">Restaura o fluxo sanguíneo na região pélvica</strong> o que naturalmente reduz a inflamação da próstata com o tempo</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" strokeWidth={3} />
                    <span><strong className="text-blue-900 block mb-1">Reativa as artérias penianas</strong> devolvendo a ereção que o entupimento estava impedindo</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" strokeWidth={3} />
                    <span><strong className="text-blue-900 block mb-1">A Arginina da fórmula age diretamente nos vasos</strong> da região — melhorando tanto a função sexual quanto o desconforto urinário</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center font-bold text-xl text-stone-900 bg-stone-100 p-4 rounded-xl border border-stone-200">Ou seja: se você tem próstata, o LibidMen não só funciona — ele trata os dois problemas ao mesmo tempo.</p>
            </div>

            {/* Testimonials for Prostate */}
            <div className="mt-16 space-y-6">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900 mb-2">Relatos de quem tratou a Próstata com LibidMen</h3>
                <p className="text-stone-500 font-medium">Veja o que dizem homens que tinham próstata inflamada e disfunção erétil</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-stone-50 p-4 sm:p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col">
                  <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6 font-medium leading-relaxed">"Cara comprei mais pensando na ereção mesmo mas o que me surpreendeu foi a próstata. Tava acordando 3x por noite pra urinar faz anos. No fim do primeiro mês tô dormindo a noite toda. E a outra parte também voltou, minha esposa tá estranhando kkk"</p>
                  <div className="flex flex-wrap items-center justify-between border-t border-stone-200 pt-4 mt-auto gap-2">
                    <span className="font-bold text-stone-900">— Maurício, 58 anos</span>
                    <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" strokeWidth={3} /> Compra verificada</span>
                  </div>
                </div>
                
                <div className="bg-stone-50 p-4 sm:p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col">
                  <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6 font-medium leading-relaxed">"Tenho próstata aumentada e o médico já queria operar. Resolvi tentar isso antes. Não sei explicar direito mas o incômodo diminuiu bastante e o que tava mole voltou a funcionar. Já pedi o kit de 3 meses"</p>
                  <div className="flex flex-wrap items-center justify-between border-t border-stone-200 pt-4 mt-auto gap-2">
                    <span className="font-bold text-stone-900">— Roberto, 63 anos</span>
                    <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" strokeWidth={3} /> Compra verificada</span>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 sm:p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col">
                  <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6 font-medium leading-relaxed">"Minha situação era das piores, próstata inflamada há 4 anos, tomando remédio controlado, e a ereção tinha ido junto. Tomei o LibidMen por 3 semanas e os dois melhoraram ao mesmo tempo. Não esperava isso não."</p>
                  <div className="flex flex-wrap items-center justify-between border-t border-stone-200 pt-4 mt-auto gap-2">
                    <span className="font-bold text-stone-900">— Carlos, 61 anos</span>
                    <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" strokeWidth={3} /> Compra verificada</span>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 sm:p-8 rounded-3xl border border-stone-200 shadow-sm relative flex flex-col">
                  <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6 font-medium leading-relaxed">"Urinava mal, dormia mal e tava mole. Agora nenhum dos três. Simples assim."</p>
                  <div className="flex flex-wrap items-center justify-between border-t border-stone-200 pt-4 mt-auto gap-2">
                    <span className="font-bold text-stone-900">— Antônio, 57 anos</span>
                    <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-full"><CheckCircle2 className="w-3 h-3" strokeWidth={3} /> Compra verificada</span>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 sm:p-8 rounded-3xl border border-stone-200 shadow-sm md:col-span-2 relative flex flex-col">
                  <div className="flex text-yellow-500 mb-4 drop-shadow-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-stone-700 italic mb-6 font-medium leading-relaxed text-lg sm:text-xl">"Fui no urologista e ele falou que era próstata e que eu ia ter que conviver com isso. Comprei o LibidMen sem muita esperança. No segundo mês minha esposa falou que eu tava diferente, mais disposto, mais homem. Eu sei o que mudou."</p>
                  <div className="flex flex-wrap items-center justify-between border-t border-stone-200 pt-4 mt-auto gap-2">
                    <span className="font-bold text-stone-900 text-lg">— José Ricardo, 59 anos</span>
                    <span className="text-green-600 font-bold text-[10px] sm:text-xs uppercase flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-4 h-4" strokeWidth={3} /> Compra verificada</span>
                  </div>
                </div>

              </div>
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

          {/* Como funciona / Passos */}
          <div className="mb-16 relative z-10 bg-white sm:bg-stone-50 px-4 py-8 sm:p-10 sm:rounded-3xl border-y sm:border border-stone-200">
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

        

          {/* Doctor Info */}
        <div className="bg-white sm:rounded-[2rem] sm:shadow-xl border-y sm:border border-stone-100 px-4 py-8 sm:p-10 mx-auto max-w-4xl mb-16 overflow-hidden">
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

        
        {/* Final CTA */}
          <div className="flex justify-center px-4 sm:px-0 mt-8 mb-8">
            <Link to="/quiz" className="w-full sm:w-auto bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black text-[clamp(1rem,4vw,1.3rem)] py-5 px-6 sm:px-10 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(220,38,38,0.8)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider scale-100 hover:scale-[1.02] active:scale-[0.98]">
              <span className="flex-1 text-center sm:flex-none">Gerar Minha Fórmula</span> 
              <ArrowRight className="w-6 h-6 shrink-0" />
            </Link>
          </div>
        </div>

      </div>
      
      {/* FOOTER & FACEBOOK DISCLAIMERS */}
      <footer className="w-full bg-stone-900 text-stone-400 py-12 px-4 text-xs font-medium text-center border-t border-stone-800 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook / Meta Platforms, Inc. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e apresentar dados reais do nosso produto de forma transparente.
          </p>
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            "FACEBOOK" é uma marca comercial registrada da FACEBOOK, Inc. e as diretrizes e regras são cuidadosamente respeitadas. Não vendemos seu e-mail ou qualquer informação para terceiros. Os resultados variam de pessoa para pessoa e o uso deste produto não substitui acompanhamento médico adequado.
          </p>
          <p className="opacity-80">
            Pirataria é crime, a venda só pode ser realizada através deste site oficial. <br/>
            © {new Date().getFullYear()} Vigor Suplementos Farmaceutica - CNPJ: 40.170.238/0001-80 - Todos os direitos reservados.
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
