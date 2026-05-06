import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { format } from 'date-fns';
import { ShieldAlert, BarChart3, Users, Activity, LogOut } from 'lucide-react';
import { FunnelEvent } from '../lib/analytics';

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        loadData();
      } else {
        setEvents([]);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadData = () => {
    setLoading(true);
    const q = query(collection(db, 'analytics_events'), orderBy('timestamp', 'desc'));
    
    return onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
      setLoading(false);
      setError('');
    }, (err) => {
      console.error(err);
      setError('Acesso negado. Você não tem permissão de administrador.');
      setLoading(false);
    });
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-stone-100">
          <ShieldAlert className="w-16 h-16 text-stone-300 mx-auto mb-6" />
          <h1 className="text-3xl font-black text-stone-900 mb-2">Área Restrita</h1>
          <p className="text-stone-500 mb-8 font-medium">Faça login para acessar o painel ao vivo.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-stone-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg transition-all"
          >
            Entrar com Google
          </button>
          {error && <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>}
        </div>
      </div>
    );
  }

  // Calculate funnel metrics
  const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
  const vslViews = new Set(events.filter(e => e.eventName === FunnelEvent.VSL_VIEW).map(e => e.sessionId)).size;
  const quizStarts = new Set(events.filter(e => e.eventName === FunnelEvent.QUIZ_START).map(e => e.sessionId)).size;
  const quizCompletes = new Set(events.filter(e => e.eventName === FunnelEvent.QUIZ_COMPLETE).map(e => e.sessionId)).size;
  const salesViews = new Set(events.filter(e => e.eventName === FunnelEvent.SALES_PAGE_VIEW).map(e => e.sessionId)).size;
  const checkouts = new Set(events.filter(e => e.eventName === FunnelEvent.CHECKOUT_CLICK).map(e => e.sessionId)).size;

  const funnelData = [
    { name: 'Acessaram VSL', value: vslViews, prev: vslViews },
    { name: 'Iniciaram Quiz', value: quizStarts, prev: vslViews },
    { name: 'Completaram Quiz', value: quizCompletes, prev: quizStarts },
    { name: 'Página de Vendas', value: salesViews, prev: quizCompletes },
    { name: 'Cliques Checkout', value: checkouts, prev: salesViews },
  ];

  return (
    <div className="min-h-screen bg-stone-100 font-sans p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-red-600" />
            <div>
              <h1 className="text-2xl font-black text-stone-900 leading-none">Dashboard LibidMen</h1>
              <p className="text-stone-500 text-sm font-medium">Visualização em tempo real do funil de vendas</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-stone-600">{user.email}</span>
            <button onClick={handleLogout} className="text-stone-400 hover:text-stone-800 transition-colors p-2 rounded-lg hover:bg-stone-100">
               <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {error && (
           <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 flex items-start gap-3">
             <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
             <p className="font-bold">{error}</p>
           </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-stone-500 font-bold uppercase text-xs tracking-wider">Total de Sessões Únicas</h3>
              <Users className="w-5 h-5 text-stone-400" />
            </div>
            <p className="text-4xl font-black text-stone-900">{uniqueSessions}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-stone-500 font-bold uppercase text-xs tracking-wider">Taxa Conv. Quiz</h3>
              <BarChart3 className="w-5 h-5 text-stone-400" />
            </div>
            <p className="text-4xl font-black text-stone-900">
              {quizStarts > 0 ? Math.round((quizCompletes / quizStarts) * 100) : 0}%
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-stone-500 font-bold uppercase text-xs tracking-wider">Cliques para Checkout</h3>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-4xl font-black text-green-600">{checkouts}</p>
          </div>
        </div>

        {/* Funnel Visualizer */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200">
          <h2 className="text-lg font-black text-stone-900 mb-6 uppercase tracking-wider">Etapas do Funil</h2>
          <div className="space-y-4">
            {funnelData.map((step, idx) => {
               const percentage = step.prev > 0 ? Math.round((step.value / step.prev) * 100) : 0;
               const maxVal = Math.max(...funnelData.map(d => d.value)) || 1;
               const width = `${Math.max((step.value / maxVal) * 100, 2)}%`;
               
               return (
                 <div key={idx} className="relative pt-1">
                   <div className="flex items-center justify-between mb-1">
                     <span className="text-sm font-bold text-stone-700">{step.name}</span>
                     <div className="text-right">
                       <span className="text-sm font-black text-stone-900 mr-2">{step.value} víts</span>
                       <span className="text-xs font-bold px-2 py-1 bg-stone-100 rounded text-stone-500 select-none">
                         {idx === 0 ? '-' : `${percentage}%`}
                       </span>
                     </div>
                   </div>
                   <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-stone-100">
                     <div style={{ width }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-1000 ${idx === 4 ? 'bg-green-500' : 'bg-red-600'}`}></div>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>

        {/* Recent Events Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-6 border-b border-stone-100">
            <h2 className="text-lg font-black text-stone-900 uppercase tracking-wider">Últimos Eventos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-6 py-4">Data/Hora</th>
                  <th className="px-6 py-4">Evento</th>
                  <th className="px-6 py-4">Detalhes</th>
                  <th className="px-6 py-4">Sessão / ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-medium tracking-tight">
                {events.slice(0, 50).map(evt => (
                  <tr key={evt.id} className="hover:bg-stone-50/50">
                    <td className="px-6 py-3">
                      {evt.timestamp?.toDate() ? format(evt.timestamp.toDate(), 'dd/MM HH:mm:ss') : 'Agora'}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`px-2 py-1 rounded text-[11px] font-bold ${
                        evt.eventName.includes('CHECKOUT') ? 'bg-green-100 text-green-700' :
                        evt.eventName.includes('QUIZ_COMPLETE') ? 'bg-blue-100 text-blue-700' :
                        'bg-stone-100 text-stone-600'
                      }`}>
                        {evt.eventName}
                      </span>
                    </td>
                    <td className="px-6 py-3 truncate max-w-[200px]" title={evt.details}>
                      {evt.details ? evt.details : '-'}
                    </td>
                    <td className="px-6 py-3 font-mono text-[10px] text-stone-400">
                      {evt.sessionId.substring(0, 8)}...
                    </td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-stone-400">Nenhum evento registrado ainda.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
