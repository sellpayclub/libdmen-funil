import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Timer,
  Star,
  Activity,
  Plus,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { VideoPlayer } from "../components/VideoPlayer";
import { trackEvent, FunnelEvent } from "../lib/analytics";

const dataChart = [
  { day: 0, performance: 20 },
  { day: 3, performance: 35 },
  { day: 7, performance: 50 },
  { day: 14, performance: 75 },
  { day: 30, performance: 90 },
  { day: 90, performance: 100 },
];

const CUSTOMER_PHOTOS = [
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/2cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/4cliente.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/5cliente.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6cliente.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/7cliente.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1depoclientes.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/2depoclientes.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3depoclientes.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/4depoclientes.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/5depoclientes.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6depoclientes.jpg",
];

export default function Sales() {
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const answers: string[] = location.state?.answers || [];
  const userName = answers[0] || "";
  const hasProstateIssue = answers.some(
    (a) =>
      a.includes("Sim, ja fui") ||
      a.includes("desconfiado") ||
      a.includes("HPB"),
  );

  useEffect(() => {
    trackEvent(FunnelEvent.SALES_PAGE_VIEW);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const firstCard = carouselRef.current.children[0] as HTMLElement;
          const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 364;
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
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

      <div className="max-w-5xl mx-auto px-0 sm:px-6 pt-10">
        {/* Results Overview */}
        <div className="bg-white px-4 py-8 sm:p-12 mb-16 relative sm:rounded-3xl sm:shadow-xl sm:shadow-stone-200/50 border-y sm:border border-stone-100 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex justify-center md:justify-start w-full mb-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" /> Análise Concluída
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-2 sm:mb-4 font-heading leading-[1.1] text-center md:text-left drop-shadow-sm">
              {userName
                ? `Sua fórmula personalizada está pronta, ${userName}!`
                : "Sua fórmula personalizada está pronta!"}
            </h1>

            <div className="flex justify-center mb-4 sm:mb-6 w-full">
              <img
                src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/pote.png"
                alt="Produto LibidMen"
                className="w-full max-w-[320px] sm:max-w-sm drop-shadow-2xl"
              />
            </div>

            <p className="text-stone-600 mb-6 sm:mb-8 text-center md:text-left text-lg">
              Com base nas suas respostas, o sistema científico identificou o
              protocolo exato para reativar seu fluxo sanguíneo:
            </p>

            {/* INICIO BLOCO PERSONALIZADO */}
            {answers.length > 0 && (
              <div className="mb-10 space-y-4 text-left max-w-3xl mx-auto md:mx-0">
                {/* Age block */}
                {answers[1] && (
                  <div className="bg-blue-50/70 border border-blue-200 p-5 rounded-2xl shadow-sm">
                    <h3 className="font-black text-blue-900 mb-2 font-heading tracking-tight text-lg">
                      Análise por Idade ({answers[1]}):
                    </h3>
                    <p className="text-stone-700 font-medium">
                      {answers[1].includes("35 a 42") &&
                        "Você ainda está no momento certo para reverter isso antes que avance."}
                      {answers[1].includes("43 a 50") &&
                        "A maioria dos homens na sua faixa etária ignora isso até ser tarde. Você não vai ser mais um usando LibidMen."}
                      {answers[1].includes("51 a 58") &&
                        "Com mais de 50 anos, o entupimento avança mais rápido — mas o LibidMen foi desenvolvido exatamente para você."}
                      {answers[1].includes("59 a 65") &&
                        `${userName ? userName + ", c" : "C"}omo você está com idade entre ${answers[1]}, homens de 60+ são os que mais se surpreendem com os resultados. Porque nunca acharam que ainda era possível. Mas quanto mais tempo demorar pode ser mais difícil ainda o tratamento, e por isso deve iniciar imediatamente antes que seja tarde demais!`}
                      {answers[1].includes("Acima de 65") &&
                        `Idade não determina função. O que determina é o estado das suas artérias — e isso é tratável. ${userName ? "E " + userName + ", p" : "P"}ela sua idade, quanto mais tempo demorar pode ser mais difícil ainda o tratamento, e por isso deve iniciar imediatamente antes que seja tarde demais!`}
                    </p>
                  </div>
                )}

                {/* Time block */}
                {answers[2] && (
                  <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-2xl shadow-sm">
                    <h3 className="font-black text-amber-900 mb-2 font-heading tracking-tight text-lg">
                      Tempo de Disfunção ({answers[2]}):
                    </h3>
                    <p className="text-stone-700 font-medium">
                      {(answers[2].includes("Menos de 6 meses") &&
                        "⚠️ Você está no momento ideal para tratar. O entupimento ainda é inicial e o processo de reversão é mais rápido.") ||
                        ((answers[2].includes("Entre 6 meses e 1 ano") ||
                          answers[2].includes("Sempre tive")) &&
                          "⚠️ O entupimento já está avançando. Cada mês sem tratamento o caminho fica mais estreito.") ||
                        (answers[2].includes("Entre 1 e 3 anos") &&
                          "⚠️ Com esse tempo de disfunção, o entupimento já está moderado a avançado. O tratamento é possível mas exige consistência.") ||
                        (answers[2].includes("Mais de 3 anos") &&
                          "⚠️ Esse é o perfil que mais precisa de dose concentrada. Por isso sua fórmula foi ajustada com concentração elevada de Arginina.")}
                    </p>
                  </div>
                )}

                {/* Conditions block */}
                {answers[6] && !answers[6].includes("Não tenho nenhuma") && (
                  <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-2xl shadow-sm">
                    <h3 className="font-black text-rose-900 mb-3 font-heading tracking-tight text-lg">
                      Ajuste Especial por Condição de Saúde:
                    </h3>
                    <ul className="space-y-3 text-stone-700 font-medium">
                      {answers[6].includes("Tenho diabetes") && (
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 text-rose-600">
                            ⚠️
                          </div>
                          <div>
                            <strong className="text-stone-900">
                              Metabolismo Diabético:
                            </strong>{" "}
                            Sua fórmula foi ajustada para metabolismo diabético.
                            A absorção dos ingredientes é diferente — por isso a
                            dose de Piridoxina foi aumentada para garantir que o
                            sinal nervoso chegue corretamente mesmo com glicemia
                            elevada.
                          </div>
                        </li>
                      )}
                      {answers[6].includes("Tenho pressão alta") && (
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 text-rose-600">
                            ⚠️
                          </div>
                          <div>
                            <strong className="text-stone-900">
                              Pressão Alta:
                            </strong>{" "}
                            Homens com pressão alta não podem usar azulzinho com
                            segurança — e você fez certo em buscar uma
                            alternativa. Sua fórmula usa ingredientes que
                            melhoram a circulação sem aumentar a pressão
                            arterial.
                          </div>
                        </li>
                      )}
                      {answers[6].includes("Colesterol elevado") && (
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 text-rose-600">
                            ⚠️
                          </div>
                          <div>
                            <strong className="text-stone-900">
                              Colesterol Elevado:
                            </strong>{" "}
                            Colesterol alto acelera o entupimento das artérias
                            penianas. Sua dose de Arginina foi elevada para
                            compensar a obstrução adicional causada pelo acúmulo
                            de placas.
                          </div>
                        </li>
                      )}
                      {(answers[6].includes("Tenho obesidade") ||
                        answers[6].includes("distúrbios hormonais")) && (
                        <li className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 text-rose-600">
                            ⚠️
                          </div>
                          <div>
                            <strong className="text-stone-900">
                              Condição Metabólica:
                            </strong>{" "}
                            Sua fórmula considera seu metabolismo e foca em
                            reativar a circulação sem interferir nos seus
                            hormônios ou sobrecarregar seu organismo.
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Usage Block */}
                {answers[7] && (
                  <div className="bg-purple-50/70 border border-purple-200 p-5 rounded-2xl shadow-sm">
                    <h3 className="font-black text-purple-900 mb-2 font-heading tracking-tight text-lg">
                      Histórico de Uso de Produtos:
                    </h3>
                    <div className="space-y-3 text-stone-700 font-medium">
                      {(answers[7].includes("Viagra") ||
                        answers[7].includes("Tadalafila")) && (
                        <p>
                          ⚠️{" "}
                          <strong className="text-stone-900">
                            Atenção importante para o seu caso.
                          </strong>
                          <br />
                          O uso de medicamentos sintéticos reduz
                          progressivamente a produção natural de óxido nítrico
                          do seu corpo. Sua fórmula inclui concentração
                          adicional de Arginina para reativar essa produção
                          natural que foi suprimida.
                          <br />
                          <br />
                          <span className="bg-purple-100 px-2 py-1 rounded text-purple-900">
                            Os primeiros 7 dias podem ter resposta mais lenta
                            justamente por isso — seu corpo precisa reaprender a
                            funcionar sozinho. A partir da segunda semana os
                            resultados se tornam consistentes!
                          </span>
                        </p>
                      )}
                      {answers[7].includes("Suplementos naturais") && (
                        <p>
                          O motivo pelo qual não funcionou é a dose genérica.
                          Suplementos de prateleira usam a mesma concentração
                          para todo mundo. Sua fórmula foi calculada
                          especificamente para o seu nível de obstrução e seu
                          perfil metabólico.
                        </p>
                      )}
                      {answers[7].includes("Nunca usei nada") && (
                        <p>
                          Você está em vantagem. Seu corpo não criou dependência
                          química e responde mais rápido ao tratamento natural.
                          Nossos pacientes que nunca usaram medicamentos
                          sintéticos relatam resultados a partir do 7º dia.
                        </p>
                      )}
                      {answers[7].includes("Já usei de tudo") && (
                        <p>
                          Você provavelmente usou doses subdosadas e fórmulas
                          genéricas que não trataram a raiz do problema. Agora
                          com uma fórmula personalizada calculada para a sua
                          real necessidade, o resultado é muito superior.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* FIM BLOCO PERSONALIZADO */}

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto md:mx-0">
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">
                    Nível de obstrução:
                  </span>
                  <span className="text-stone-600">Moderado a avançado</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">
                    Déficit de Óxido Nítrico:
                  </span>
                  <span className="text-stone-600">Marcador Confirmado</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">
                    Dose de Arginina:
                  </span>
                  <span className="text-stone-600">
                    Concentração elevada ajustada
                  </span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">
                    Dose de Feno-grego:
                  </span>
                  <span className="text-stone-600">
                    Dose máxima para elevação
                  </span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 text-lg">
                    Perfil Metábólico:
                  </span>
                  <span className="text-stone-600">
                    Complexo de absorção rápida
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-100 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-red-900 bg-red-50 px-6 py-4 rounded-[1.5rem] border-2 border-red-200 font-bold shadow-sm w-full text-center">
                <Timer className="w-8 h-8 text-red-600 shrink-0 mb-2 sm:mb-0" />
                <span className="flex-1 text-lg sm:text-xl md:text-2xl">
                  Resultados Iniciais em:{" "}
                  <strong className="text-red-700 block sm:inline">
                    11 a 18 dias!
                  </strong>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-green-900 bg-green-50 px-6 py-4 rounded-[1.5rem] border-2 border-green-300 font-bold shadow-sm w-full text-center">
                <ShieldCheck className="w-8 h-8 text-green-600 shrink-0 mb-2 sm:mb-0" />
                <span className="flex-1 text-lg sm:text-xl md:text-2xl text-stone-800">
                  Recomendado:{" "}
                  <strong className="text-green-700 block sm:inline">
                    Tratamento de 3 meses para cura 100%
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white px-4 py-8 sm:p-6 md:p-10 mb-16 relative z-10 w-full sm:rounded-3xl sm:shadow-xl border-y sm:border border-stone-100 overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-2 font-heading tracking-tight leading-tight">
              {userName
                ? `${userName}, com base na suas respostas, essa é a Projeção de Evolução usando o LibidMen:`
                : "Projeção de Evolução com LibidMen"}
            </h2>
            <p className="text-stone-600 font-medium text-sm md:text-base">
              Toque no gráfico para ver a evolução estimada das suas ereções:
            </p>
          </div>

          <div className="h-64 sm:h-72 lg:h-80 w-full mt-6 -ml-4 sm:ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dataChart}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorPerformance"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  tickFormatter={(value) => `Dia ${value}`}
                  stroke="#a8a29e"
                  tick={{ fill: "#78716c", fontWeight: 600, fontSize: 12 }}
                  tickMargin={10}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `${value}%`}
                  stroke="#a8a29e"
                  tick={{ fill: "#78716c", fontWeight: 600, fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f5f5f4"
                />
                <Tooltip
                  formatter={(value: any) => [
                    `${value}% da Capacidade Total`,
                    "Potência Erétil",
                  ]}
                  labelFormatter={(label) => `Dia ${label} de uso`}
                  contentStyle={{
                    borderRadius: "1rem",
                    border: "1px solid #f5f5f4",
                    boxShadow: "0 10px 25px -4px rgba(0,0,0,0.1)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "12px",
                  }}
                  cursor={{
                    stroke: "#dc2626",
                    strokeWidth: 1,
                    strokeDasharray: "5 5",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="performance"
                  stroke="#dc2626"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorPerformance)"
                  activeDot={{
                    r: 8,
                    strokeWidth: 2,
                    stroke: "#fff",
                    fill: "#dc2626",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center pt-8 border-t border-stone-100">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div className="font-black text-red-500 text-xl md:text-2xl">
                1-7 Dias
              </div>
              <div className="text-sm font-medium text-stone-600 mt-2">
                Aumento claro da energia física e reacendimento da libido
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div className="font-black text-red-600 text-xl md:text-2xl">
                15-30 Dias
              </div>
              <div className="text-sm font-medium text-stone-600 mt-2">
                Ereções mais firmes ocorrendo de forma mais consistente
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden transform sm:-translate-y-2">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-200 rounded-full blur-xl -mr-4 -mt-4"></div>
              <div className="relative z-10 font-black text-red-700 text-xl md:text-2xl">
                90 Dias
              </div>
              <div className="relative z-10 text-sm font-bold text-red-800 mt-2">
                Cura e restauração de 100% da autonomia do pênis
              </div>
            </div>
          </div>
        </div>

        {/* Prostate Section */}
        {hasProstateIssue && (
          <div className="bg-white px-4 py-8 sm:p-8 md:p-12 mb-16 relative sm:rounded-3xl sm:shadow-xl border-y sm:border border-stone-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-6 font-heading tracking-tight leading-tight text-center">
                {userName
                  ? `${userName}, Como você votou positivo para próstata, temos uma boa notícia:`
                  : "Tem Próstata Inflamada?"}
                <br />
                <span className="text-blue-600">
                  O LibidMen Foi Feito Para Você Também!
                </span>
              </h2>

              <div className="space-y-4 text-stone-600 sm:text-lg font-medium md:leading-relaxed mb-10">
                <p>
                  Se você tem dificuldade de urinar, acorda várias vezes à noite
                  para ir ao banheiro, ou sente aquela sensação de que nunca
                  esvazia completamente — saiba que isso{" "}
                  <strong className="text-stone-900">não é só próstata</strong>.
                </p>

                <p>
                  É o mesmo entupimento que está impedindo suas ereções.
                  Próstata inflamada e disfunção erétil têm a mesma raiz:{" "}
                  <strong className="text-stone-900">
                    circulação comprometida na região pélvica
                  </strong>
                  . Quando o fluxo sanguíneo está reduzido nessa área, os dois
                  problemas aparecem juntos — e pioram juntos.
                </p>

                <p>
                  É por isso que homens com próstata inflamada quase sempre têm
                  dificuldade de ereção também. Não é coincidência. É o mesmo
                  problema se manifestando de duas formas diferentes.
                </p>

                <div className="-mx-4 sm:mx-0 my-8">
                  <img
                    src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/e5e2e7ca-4a14-4e0f-b66d-85fa9c024a58.png"
                    alt="Comparação de Próstata"
                    className="w-full h-auto max-w-4xl mx-auto sm:rounded-2xl shadow-md"
                  />
                </div>

                <div className="bg-blue-50 p-4 sm:p-8 rounded-2xl border border-blue-100 my-8 shadow-sm">
                  <h3 className="text-xl font-black text-blue-900 mb-6 font-heading">
                    O que o LibidMen faz nesse caso é duplo:
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <CheckCircle2
                        className="w-6 h-6 text-blue-600 shrink-0 mt-1"
                        strokeWidth={3}
                      />
                      <span>
                        <strong className="text-blue-900 block mb-1">
                          Restaura o fluxo sanguíneo na região pélvica
                        </strong>{" "}
                        o que naturalmente reduz a inflamação da próstata com o
                        tempo
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2
                        className="w-6 h-6 text-blue-600 shrink-0 mt-1"
                        strokeWidth={3}
                      />
                      <span>
                        <strong className="text-blue-900 block mb-1">
                          Reativa as artérias penianas
                        </strong>{" "}
                        devolvendo a ereção que o entupimento estava impedindo
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2
                        className="w-6 h-6 text-blue-600 shrink-0 mt-1"
                        strokeWidth={3}
                      />
                      <span>
                        <strong className="text-blue-900 block mb-1">
                          A Arginina da fórmula age diretamente nos vasos
                        </strong>{" "}
                        da região — melhorando tanto a função sexual quanto o
                        desconforto urinário
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-center font-bold text-xl text-stone-900 bg-stone-100 p-4 rounded-xl border border-stone-200">
                  Ou seja: se você tem próstata, o LibidMen não só funciona —
                  ele trata os dois problemas ao mesmo tempo.
                </p>
              </div>

              {/* Testimonials for Prostate */}
            </div>
          </div>
        )}

        <div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">
            Escolha o Melhor Protocolo Para Você
          </h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">
            Recomendamos o uso contínuo de 3 a 6 meses para reativação total do
            fluxo sanguíneo.
          </p>
        </div>

        {/* Pricing Table / Kits */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 items-stretch mb-24 max-w-md md:max-w-3xl lg:max-w-none mx-auto px-4 sm:px-0 mt-8">
          {/* Kit 6 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
            <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
              <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">
                Tratamento Avançado
              </h3>
              <div className="mb-4">
                <p className="text-green-700 font-black text-sm bg-green-100 inline-block px-3 py-1 rounded-full border border-green-300">
                  Leve 3 + 2 Grátis
                </p>
              </div>

              <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6%20potes.png"
                  alt="6 potes LibidMen"
                  className="object-contain h-full w-full drop-shadow-xl"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2">
                <span className="text-lg text-stone-400 font-semibold line-through">
                  R$ 635,00
                </span>
              </div>
              <div className="mb-4 flex items-baseline justify-center text-green-700 drop-shadow-sm">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl font-black tracking-tight">247</span>
                <span className="text-xl font-bold">,00</span>
              </div>
              <div className="text-sm text-stone-700 font-bold bg-stone-100/80 rounded-xl py-2 px-4 shadow-sm inline-block border border-stone-200/60 w-full">
                Apenas R$ 41,16 por frasco!
              </div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/5NKDYAECY1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 6 Meses")
                }
                className="flex items-center justify-center w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-lg shadow-stone-900/20 transition-all text-lg uppercase tracking-wide hover:scale-105"
              >
                Comprar Kit 6 Meses
              </a>
            </div>
          </div>

          {/* Kit 3 (Most Popular) */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(220,38,38,0.4)] border-[5px] border-red-600 overflow-hidden flex flex-col relative z-20 transform lg:-translate-y-6">
            <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 font-black text-[13px] sm:text-sm tracking-widest uppercase shadow-md leading-relaxed px-2 z-10">
              ESTE É O KIT MAIS RECOMENDADO MUNDIALMENTE
            </div>
            <div className="p-6 sm:p-8 text-center pt-20 sm:pt-20 bg-stone-50/50 flex-grow relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent opacity-50 pointer-events-none"></div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-stone-900 mb-2 relative z-10">
                Kit 3 Meses
              </h3>
              <div className="mb-4 relative z-10">
                <span className="bg-red-100 text-red-700 font-black text-sm px-4 py-1.5 rounded-full inline-block border border-red-300 shadow-sm">
                  Leve 2 + 1 GRÁTIS
                </span>
              </div>

              <div className="h-64 sm:h-72 bg-white rounded-3xl mb-6 p-2 flex items-center justify-center shadow-inner border border-stone-100 relative z-10 transition-transform duration-300 hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3%20potes.png"
                  alt="3 potes LibidMen"
                  className="object-contain h-full w-full drop-shadow-2xl"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2 relative z-10">
                <span className="text-lg text-red-300 font-bold line-through drop-shadow-sm">
                  R$ 381,00
                </span>
              </div>
              <div className="mb-4 flex items-baseline justify-center text-red-600 drop-shadow-md relative z-10">
                <span className="text-3xl sm:text-4xl font-bold">R$</span>
                <span className="text-6xl sm:text-7xl font-black tracking-tight">
                  197
                </span>
                <span className="text-2xl font-bold">,00</span>
              </div>
              <div className="text-base sm:text-lg text-red-800 font-bold bg-white rounded-xl py-3 px-4 shadow-sm inline-block border border-red-200 w-full relative z-10">
                Apenas R$ 65,66 por frasco!
              </div>
            </div>
            <div className="p-6 sm:p-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/L2JD6XGPTC"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 3 meses")
                }
                className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-black py-5 sm:py-6 rounded-2xl shadow-[0_15px_30px_-10px_rgba(22,163,74,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.8)] transition-all uppercase tracking-wider scale-100 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="text-lg sm:text-xl md:text-2xl drop-shadow-md">
                  GARANTIR MEU KIT 3 MESES!
                </span>
                <span className="text-xs sm:text-sm text-green-100 mt-1 uppercase font-bold opacity-90 drop-shadow-sm">
                  ✅ Desconto Aplicado com Sucesso
                </span>
              </a>
            </div>
          </div>

          {/* Kit 1 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
            <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
              <h3 className="text-2xl font-bold font-heading text-stone-900 mb-2">
                Tratamento Básico
              </h3>
              <div className="flex flex-col gap-2 items-center mb-6">
                <span className="text-stone-600 font-bold">Kit 1 mês</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-xl font-bold border border-red-200 mx-2 leading-tight">
                  Apenas experimentar, não indicado para seu caso
                </span>
              </div>

              <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png"
                  alt="1 pote LibidMen"
                  className="object-contain h-full w-full drop-shadow-md opacity-90"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2">
                <span className="text-lg text-stone-400 font-semibold line-through">
                  R$ 197,00
                </span>
              </div>
              <div className="mb-6 flex items-baseline justify-center text-stone-500">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl font-black tracking-tight">127</span>
                <span className="text-xl font-bold">,00</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/70ME8V8Q78"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 1 mês")
                }
                className="flex items-center justify-center w-full text-center bg-stone-200 hover:bg-stone-300 text-stone-600 font-black py-4 rounded-2xl transition-all text-lg uppercase tracking-wide hover:scale-105"
              >
                Comprar Agora
              </a>
            </div>
          </div>
        </div>

        {/* Como funciona / Passos */}
        <div className="mb-16 relative z-10 bg-white sm:bg-stone-100/50 px-4 py-8 sm:p-10 border-y sm:border sm:rounded-3xl border-stone-200 sm:shadow-sm">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-2 text-stone-900 tracking-tight uppercase">
            Como funciona a manipulação e entrega?
          </h3>
          <p className="text-center text-stone-600 font-medium mb-10">
            O processo para que você receba um composto único na sua casa
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-1.5 bg-stone-200 rounded-full z-0"></div>

            {/* Passo 1 */}
            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 bg-white border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-sm relative">
                <CheckCircle2 strokeWidth={3} className="w-10 h-10" />
              </div>
              <h4 className="font-black text-lg text-stone-900 mb-2">
                1. Avaliação Concluída
              </h4>
              <p className="text-stone-600 text-sm px-2 font-medium">
                Você já respondeu o checklist e nós já sabemos as dosagens que
                seu corpo precisa.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 bg-white border-4 border-stone-300 text-stone-400 group-hover:border-red-600 group-hover:text-red-600 rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-sm transition-all duration-300 relative">
                <Activity strokeWidth={3} className="w-10 h-10" />
              </div>
              <h4 className="font-black text-lg text-stone-900 mb-2">
                2. Manipulação Laboratorial
              </h4>
              <p className="text-stone-600 text-sm px-2 font-medium">
                Ao confirmar o pedido, nossa equipe manipula{" "}
                <strong className="text-red-700">
                  os ingredientes na dosagem exclusiva
                </strong>{" "}
                para você.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-24 h-24 bg-red-700 border-4 border-red-500 text-white rounded-full flex items-center justify-center text-4xl font-black mb-5 shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-transform duration-300 group-hover:scale-110 relative">
                3
              </div>
              <h4 className="font-black text-lg text-stone-900 mb-2">
                3. Entrega Super Rápida
              </h4>
              <p className="text-stone-600 text-sm px-2 font-medium">
                Sua fórmula é despachada discretamente.{" "}
                <strong className="text-stone-900 block mt-1">
                  Prazo de 3 a 5 dias úteis, no máximo, para todo o Brasil!
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Video Testimonial Antes do Carrossel */}
        <div className="text-center mb-10 pt-10 border-t border-stone-200 px-4 sm:px-0">
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4 font-heading tracking-tight">
            Veja O Que Eles Estão Dizendo
          </h2>
          <p className="text-stone-600 sm:text-lg max-w-2xl mx-auto font-medium mb-8">
            Nossos clientes compartilham seus resultados com o tratamento
            LibidMen
          </p>

          <div className="max-w-sm mx-auto bg-black sm:rounded-lg shadow-2xl overflow-hidden mb-16 border-y sm:border-x-4 border-stone-800 -mx-4 sm:mx-auto">
            <VideoPlayer
              playerId="69fe24c669941ed24647bcfa"
              smartPlayerId="ceaefeeb-feef-4b52-8911-9ec9de0d5b6b"
              scriptSrc="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"
              aspectRatioPadding="100%"
            />
          </div>
        </div>

        {/* Carousel Real Customers */}
        <div className="mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-4xl h-full bg-gradient-to-r from-red-50 to-orange-50 rounded-[3rem] -z-10 -skew-y-2 opacity-50"></div>

          <div className="text-center mb-10 relative z-10 pt-10 px-4 sm:px-0">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-current drop-shadow-sm" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mb-4 font-heading tracking-tight drop-shadow-sm">
              Homens Reais.{" "}
              <span className="text-red-600">Resultados Reais.</span>
            </h2>
            <p className="text-stone-600 sm:text-lg font-medium max-w-2xl mx-auto">
              Mais de 12.500 homens já recuperaram a potência e a confiança.
              Veja quem testou e aprovou a eficácia do LibidMen.
            </p>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 snap-x snap-mandatory hide-scrollbars px-4 sm:px-10"
            >
              {CUSTOMER_PHOTOS.map((img, i) => (
                <div
                  key={i}
                  className="w-[85vw] sm:w-[340px] aspect-square rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-xl border border-stone-200/60 bg-stone-100 relative group"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={`Cliente Satisfeito ${i + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full">
                    <div className="flex items-center gap-2 text-white/90 text-[13px] sm:text-sm font-bold bg-black/40 w-max px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-green-400" /> Compra
                      Verificada
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety & Contraindications */}
        <div className="bg-green-50 px-4 py-8 sm:p-12 mb-16 relative sm:rounded-[2.5rem] sm:shadow-lg border border-green-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-[80px] -ml-32 -mt-32 pointer-events-none opacity-50"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative z-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-100">
              <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-4 font-heading tracking-tight leading-tight">
                100% Seguro e <span className="text-green-700">Sem Contraindicações</span>
              </h2>
              <p className="text-stone-700 sm:text-lg mb-4 font-medium leading-relaxed">
                Por ser uma fórmula exclusiva desenvolvida com ingredientes naturais de alta pureza, o LibidMen <strong>não possui efeitos colaterais e não interage com outros medicamentos</strong>.
              </p>
              <ul className="text-stone-700 sm:text-lg space-y-2 font-medium">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Seguro para hipertensos</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Seguro para diabéticos</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Aprovado por orgãos regulamentadores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-stone-900 text-white sm:rounded-[2.5rem] sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] px-4 py-8 sm:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-20 pointer-events-none -mt-40 -mr-40"></div>

          <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center border-8 border-stone-800 shadow-[0_0_40px_rgba(220,38,38,0.4)] relative z-10">
            <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-md" />
          </div>
          <div className="text-center md:text-left relative z-10 flex-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white mb-4 drop-shadow-sm tracking-tight uppercase">
              GARANTIA INCONDICIONAL DE 90 DIAS
            </h3>
            <p className="text-stone-300 sm:text-lg leading-relaxed font-medium">
              Você tem 3 meses para testar as cápsulas na sua casa. Se você não
              notar ereções mais firmes, aumento extremo da disposição e libido
              restaurada, nós devolvemos cada centavo do seu investimento.
            </p>
            <p className="text-stone-400 font-bold mt-4">
              ✓ Risco ZERO e 100% Blindado.
            </p>
          </div>
        </div>

        <div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading tracking-tight text-stone-900 drop-shadow-sm">
            Escolha o Melhor Protocolo Para Você
          </h2>
          <p className="text-stone-500 sm:text-lg max-w-2xl mx-auto font-medium">
            Recomendamos o uso contínuo de 3 a 6 meses para reativação total do
            fluxo sanguíneo.
          </p>
        </div>

        {/* Pricing Table / Kits */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 items-stretch mb-24 max-w-md md:max-w-3xl lg:max-w-none mx-auto px-4 sm:px-0 mt-8">
          {/* Kit 6 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
            <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
              <h3 className="text-2xl font-bold font-heading text-stone-900 mb-1">
                Tratamento Avançado
              </h3>
              <div className="mb-4">
                <p className="text-green-700 font-black text-sm bg-green-100 inline-block px-3 py-1 rounded-full border border-green-300">
                  Leve 3 + 2 Grátis
                </p>
              </div>

              <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/6%20potes.png"
                  alt="6 potes LibidMen"
                  className="object-contain h-full w-full drop-shadow-xl"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2">
                <span className="text-lg text-stone-400 font-semibold line-through">
                  R$ 635,00
                </span>
              </div>
              <div className="mb-4 flex items-baseline justify-center text-green-700 drop-shadow-sm">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl font-black tracking-tight">247</span>
                <span className="text-xl font-bold">,00</span>
              </div>
              <div className="text-sm text-stone-700 font-bold bg-stone-100/80 rounded-xl py-2 px-4 shadow-sm inline-block border border-stone-200/60 w-full">
                Apenas R$ 41,16 por frasco!
              </div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/5NKDYAECY1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 6 Meses")
                }
                className="flex items-center justify-center w-full text-center bg-stone-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-lg shadow-stone-900/20 transition-all text-lg uppercase tracking-wide hover:scale-105"
              >
                Comprar Kit 6 Meses
              </a>
            </div>
          </div>

          {/* Kit 3 (Most Popular) */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(220,38,38,0.4)] border-[5px] border-red-600 overflow-hidden flex flex-col relative z-20 transform lg:-translate-y-6">
            <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 font-black text-[13px] sm:text-sm tracking-widest uppercase shadow-md leading-relaxed px-2 z-10">
              ESTE É O KIT MAIS RECOMENDADO MUNDIALMENTE
            </div>
            <div className="p-6 sm:p-8 text-center pt-20 sm:pt-20 bg-stone-50/50 flex-grow relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent opacity-50 pointer-events-none"></div>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-stone-900 mb-2 relative z-10">
                Kit 3 Meses
              </h3>
              <div className="mb-4 relative z-10">
                <span className="bg-red-100 text-red-700 font-black text-sm px-4 py-1.5 rounded-full inline-block border border-red-300 shadow-sm">
                  Leve 2 + 1 GRÁTIS
                </span>
              </div>

              <div className="h-64 sm:h-72 bg-white rounded-3xl mb-6 p-2 flex items-center justify-center shadow-inner border border-stone-100 relative z-10 transition-transform duration-300 hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/3%20potes.png"
                  alt="3 potes LibidMen"
                  className="object-contain h-full w-full drop-shadow-2xl"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2 relative z-10">
                <span className="text-lg text-red-300 font-bold line-through drop-shadow-sm">
                  R$ 381,00
                </span>
              </div>
              <div className="mb-4 flex items-baseline justify-center text-red-600 drop-shadow-md relative z-10">
                <span className="text-3xl sm:text-4xl font-bold">R$</span>
                <span className="text-6xl sm:text-7xl font-black tracking-tight">
                  197
                </span>
                <span className="text-2xl font-bold">,00</span>
              </div>
              <div className="text-base sm:text-lg text-red-800 font-bold bg-white rounded-xl py-3 px-4 shadow-sm inline-block border border-red-200 w-full relative z-10">
                Apenas R$ 65,66 por frasco!
              </div>
            </div>
            <div className="p-6 sm:p-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/L2JD6XGPTC"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 3 meses")
                }
                className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-black py-5 sm:py-6 rounded-2xl shadow-[0_15px_30px_-10px_rgba(22,163,74,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.8)] transition-all uppercase tracking-wider scale-100 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="text-lg sm:text-xl md:text-2xl drop-shadow-md">
                  GARANTIR MEU KIT 3 MESES!
                </span>
                <span className="text-xs sm:text-sm text-green-100 mt-1 uppercase font-bold opacity-90 drop-shadow-sm">
                  ✅ Desconto Aplicado com Sucesso
                </span>
              </a>
            </div>
          </div>

          {/* Kit 1 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col group relative">
            <div className="p-6 sm:p-8 text-center bg-stone-50/50 flex-grow mt-6">
              <h3 className="text-2xl font-bold font-heading text-stone-900 mb-2">
                Tratamento Básico
              </h3>
              <div className="flex flex-col gap-2 items-center mb-6">
                <span className="text-stone-600 font-bold">Kit 1 mês</span>
                <span className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-xl font-bold border border-red-200 mx-2 leading-tight">
                  Apenas experimentar, não indicado para seu caso
                </span>
              </div>

              <div className="h-56 bg-white rounded-3xl mb-6 p-4 flex items-center justify-center shadow-inner border border-stone-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/1pote.png"
                  alt="1 pote LibidMen"
                  className="object-contain h-full w-full drop-shadow-md opacity-90"
                />
              </div>

              <div className="mb-1 flex items-baseline justify-center gap-2">
                <span className="text-lg text-stone-400 font-semibold line-through">
                  R$ 197,00
                </span>
              </div>
              <div className="mb-6 flex items-baseline justify-center text-stone-500">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl font-black tracking-tight">127</span>
                <span className="text-xl font-bold">,00</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 bg-white">
              <a
                href="https://seguro.vitago-suplements.shop/r/70ME8V8Q78"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(FunnelEvent.CHECKOUT_CLICK, "Kit 1 mês")
                }
                className="flex items-center justify-center w-full text-center bg-stone-200 hover:bg-stone-300 text-stone-600 font-black py-4 rounded-2xl transition-all text-lg uppercase tracking-wide hover:scale-105"
              >
                Comprar Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-stone-900 text-stone-400 py-12 px-4 text-xs font-medium text-center border-t border-stone-800 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook / Meta Platforms, Inc. Depois que você sair do Facebook, a
            responsabilidade não é deles e sim do nosso site. Fazemos todos os
            esforços para indicar claramente e apresentar dados reais do nosso
            produto de forma transparente.
          </p>
          <p className="leading-relaxed opacity-80 max-w-3xl mx-auto">
            "FACEBOOK" é uma marca comercial registrada da FACEBOOK, Inc. e as
            diretrizes e regras são cuidadosamente respeitadas. Não vendemos seu
            e-mail ou qualquer informação para terceiros. Os resultados variam
            de pessoa para pessoa e o uso deste produto não substitui
            acompanhamento médico adequado.
          </p>
          <p className="opacity-80">
            Pirataria é crime, a venda só pode ser realizada através deste site
            oficial. <br />© {new Date().getFullYear()} Vigor Suplementos
            Farmaceutica - CNPJ: 40.170.238/0001-80 - Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-4 text-[10px] text-stone-500">
            <a href="#" className="hover:text-stone-300">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">
              Políticas de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
