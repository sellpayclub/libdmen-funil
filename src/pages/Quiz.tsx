import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { trackEvent, FunnelEvent } from '../lib/analytics';
import { VideoPlayer } from '../components/VideoPlayer';

const QUESTIONS = [
  {
    title: "Qual é o seu primeiro nome?",
    type: "input",
    options: [],
    placeholder: "Digite seu nome...",
    reason: "Sua fórmula será 100% personalizada e precisa estar vinculada ao seu nome.",
    progress: 5
  },
  {
    title: "Qual é a sua idade?",
    options: ["35 a 42 anos", "43 a 50 anos", "51 a 58 anos", "59 a 65 anos", "Acima de 65 anos"],
    reason: "A idade é o principal fator para calcular a dose de Arginina e Feno-grego",
    progress: 10
  },
  {
    title: "Há quanto tempo você percebe dificuldade para ter ou manter ereção?",
    options: ["Menos de 6 meses", "Entre 6 meses e 1 ano", "Entre 1 e 3 anos", "Mais de 3 anos", "Sempre tive mas piorou recentemente"],
    reason: "O tempo de disfunção determina o nível de obstrução nas artérias penianas e a concentração necessária de Beta-Alanina",
    progress: 20
  },
  {
    title: "Como você descreveria sua ereção hoje?",
    options: ["Consigo ter ereção mas ela não dura", "Consigo ter ereção mas ela é fraca", "Raramente consigo ter ereção completa", "Quase não consigo ter ereção", "Tenho ereção mas perco no meio do ato"],
    reason: "Esse dado calibra a dose de Piridoxina responsável pelo sinal nervoso entre o cérebro e o pênis",
    progress: 30
  },
  {
    title: "Você já foi diagnosticado com HPB (Hiperplasia Prostática Benigna)?",
    options: ["🙏 Sim, ja fui diagnosticado.", "⌛ Não, mas estou desconfiado."],
    reason: "O aumento da próstata compartilha a mesma causa raiz da disfunção erétil: baixa circulação pélvica.",
    progress: 40
  },
  {
    title: "Você tem algum sintoma urinário?",
    options: ["Acordo à noite para urinar", "Jato fraco ou incompleto", "Ardência ao urinar", "Não tenho sintomas"],
    reason: "Sintomas urinários indicam circulação comprometida na mesma região responsável pela ereção. Essa resposta ajusta sua dose de Arginina para tratar os dois problemas ao mesmo tempo.",
    progress: 50
  },
  {
    title: "Você tem alguma dessas condições?",
    options: ["Tenho obesidade ou sobrepeso", "Tenho diabetes tipo 2", "Tenho distúrbios hormonais", "Tenho pressão alta (hipertensão)", "Colesterol elevado", "Não tenho nenhuma dessas condições"],
    reason: "Condições metabólicas afetam diretamente a absorção dos ingredientes e exigem ajuste na concentração de Vitaminas do complexo B",
    progress: 60
  },
  {
    title: "Você já usou ou usa algum desses produtos?",
    options: ["Viagra ou Cialis regularmente", "Suplementos naturais sem resultado", "Tadalafila sob prescrição", "Nunca usei nada", "Já usei de tudo e nada funcionou"],
    reason: "O histórico de uso de medicamentos determina o nível de dependência química e a dose necessária para reativar a produção natural de óxido nítrico",
    progress: 70
  },
  {
    title: "Como está sua libido — sua vontade de ter relações?",
    options: ["Normal, tenho vontade mas o corpo não responde", "Diminuiu bastante nos últimos anos", "Quase não sinto mais vontade", "Sinto vontade apenas esporadicamente", "Zero libido"],
    reason: "A libido indica o nível de testosterona livre no sangue e calibra a dose exata de Feno-grego da sua fórmula",
    progress: 85
  },
  {
    title: "Como você se sente emocionalmente em relação a esse problema?",
    options: ["Envergonhado mas tentando resolver", "Ansioso antes de qualquer situação íntima", "Evitando intimidade com minha parceira", "Meu relacionamento já está sendo afetado", "Já quase desisti de resolver isso"],
    reason: "O impacto emocional afeta os níveis de cortisol e serotonina — fatores que interferem diretamente na função erétil",
    progress: 100
  }
];

const CALCULATION_STEPS = [
  "Analisando nível de obstrução arterial...",
  "Calibrando dose de Arginina...",
  "Ajustando concentração de Feno-grego...",
  "Calculando Piridoxina para seu perfil metabólico...",
  "Verificando compatibilidade com seu histórico..."
];

export default function Quiz() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcStep, setCalcStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [multiSelections, setMultiSelections] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Simulation of calculation
  useEffect(() => {
    if (isCalculating) {
      if (calcStep < CALCULATION_STEPS.length) {
        const timer = setTimeout(() => {
          setCalcStep(prev => prev + 1);
        }, 1200); // adjust time per step
        return () => clearTimeout(timer);
      } else {
        const finalTimer = setTimeout(() => {
          navigate('/checkout', { state: { answers } });
        }, 1000);
        return () => clearTimeout(finalTimer);
      }
    }
  }, [isCalculating, calcStep, navigate, answers]);

  const handleStart = () => {
    setStarted(true);
    trackEvent(FunnelEvent.QUIZ_START);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim().length < 2) return;
    proceedNext(inputValue.trim());
  };

  const isMultiSelect = currentQuestion === 6 || currentQuestion === 7;

  const handleOptionSelect = (option: string) => {
    if (isMultiSelect) {
      if (option === "Não tenho nenhuma dessas condições" || option === "Nunca usei nada") {
        setMultiSelections([option]);
        return;
      }
      
      setMultiSelections(prev => {
        // Remove exclusive options if they were selected
        let updated = prev.filter(p => p !== "Não tenho nenhuma dessas condições" && p !== "Nunca usei nada");
        
        if (updated.includes(option)) {
          return updated.filter(o => o !== option);
        } else {
          return [...updated, option];
        }
      });
      return;
    }

    proceedNext(option);
  };

  const handleMultiSubmit = () => {
    if (multiSelections.length === 0) return;
    proceedNext(multiSelections.join(", "));
  };

  const proceedNext = (answerString: string) => {
    const newAnswers = [...answers, answerString];
    setAnswers(newAnswers);
    setMultiSelections([]); // reset for next if any
    setInputValue(""); // reset input

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCalculating(true);
      trackEvent(FunnelEvent.QUIZ_COMPLETE, JSON.stringify(newAnswers));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4 sm:px-6 py-6 text-center">
        <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8 w-full max-w-md">
           <div className="w-16 h-16 border-4 border-stone-200 border-t-red-600 rounded-full animate-spin mx-auto mb-6"></div>
           <h2 className="text-2xl font-bold font-heading text-stone-900 mb-6">Calculando sua fórmula personalizada...</h2>
           
           <div className="space-y-4 text-left">
             {CALCULATION_STEPS.map((step, index) => (
               <div key={index} className={`flex items-center gap-3 transition-opacity duration-500 ${index <= calcStep ? 'opacity-100' : 'opacity-20'}`}>
                 {index < calcStep ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                 ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-stone-300 shrink-0"></div>
                 )}
                 <span className="text-stone-700 text-sm md:text-base">{step}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center pt-8 sm:pt-12 px-3 sm:px-6 py-6 text-center">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-stone-100 px-5 py-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
          
          <div className="mb-6 inline-flex items-center gap-2 bg-yellow-100/80 border border-yellow-200/50 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold relative z-10 drop-shadow-sm">
            <span className="text-lg">⚠️</span> Seus dados são 100% confidenciais
          </div>

          <div className="max-w-sm mx-auto mb-8 relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[3px] border-stone-100">
            <VideoPlayer
              playerId="69ff56e8f18251980ded5cdf"
              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"
              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
              aspectRatioPadding="100%"
            />
          </div>
          
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
  }

  const q = QUESTIONS[currentQuestion];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center pt-8 sm:pt-12 px-0 sm:px-6 py-0 sm:py-6">
      <div className="w-full max-w-xl">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8 px-4 sm:px-0">
           <div className="flex justify-between text-sm font-medium text-stone-500 mb-2">
             <span>Pergunta {currentQuestion + 1} de {QUESTIONS.length}</span>
             <span>{q.progress}%</span>
           </div>
           <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
             <div 
               className="h-full bg-red-600 transition-all duration-500 ease-out" 
               style={{ width: `${q.progress}%` }}
             ></div>
           </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-none sm:rounded-[2rem] shadow-none sm:shadow-xl border-y sm:border border-stone-200 px-5 py-8 sm:p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight font-heading relative z-10 mb-2">
            {q.title}
          </h2>
          {(q as any).subtitle && (
            <p className="text-stone-500 font-medium mb-6 relative z-10">{(q as any).subtitle}</p>
          )}
          {isMultiSelect && <span className="block text-sm font-bold text-red-600 mb-6 relative z-10">(Selecione todas que se aplicam)</span>}
          
          <div className="space-y-3 relative z-10">
            {q.type === 'input' ? (
              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder={(q as any).placeholder}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border-2 border-stone-200 focus:border-red-600 focus:ring-4 focus:ring-red-100 transition-all font-medium sm:text-lg outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim().length > 1) {
                      handleInputSubmit();
                    }
                  }}
                />
                <button
                  onClick={handleInputSubmit}
                  disabled={inputValue.trim().length < 2}
                  className={`w-full py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2
                    ${inputValue.trim().length >= 2
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/30' 
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}
                >
                  Continuar <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ) : (
              q.options.map((opt, i) => {
                const isSelected = isMultiSelect && multiSelections.includes(opt);
                return (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(opt)}
                    className={`w-full text-left px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border-2 transition-all shadow-sm flex items-center justify-between group
                      ${isSelected 
                        ? 'border-red-600 bg-red-50 text-stone-900' 
                        : 'border-stone-200 hover:border-red-600 hover:bg-neutral-50 text-stone-800'} 
                      font-bold sm:text-lg`}
                  >
                    <span>{opt}</span>
                    {isMultiSelect ? (
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors
                        ${isSelected ? 'border-red-600 bg-red-600' : 'border-stone-300 group-hover:border-red-400'}`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />}
                      </div>
                    ) : (
                      <span className="w-6 h-6 rounded-full border-2 border-stone-300 group-hover:border-red-600 flex items-center justify-center flex-shrink-0">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {isMultiSelect && (
            <div className="mt-8 relative z-10">
              <button
                onClick={handleMultiSubmit}
                disabled={multiSelections.length === 0}
                className={`w-full py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2
                  ${multiSelections.length > 0 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/30' 
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Reason footer */}
        <div className="bg-blue-50/80 border border-blue-100/60 p-4 sm:p-5 rounded-2xl flex gap-3 sm:gap-4 text-blue-900 text-sm sm:text-base leading-relaxed">
          <div className="mt-0.5 text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <p className="font-medium">{q.reason}</p>
        </div>
      </div>
    </div>
  );
}
