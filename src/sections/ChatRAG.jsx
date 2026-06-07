import React, { useState } from 'react';

export default function ChatRAG() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "¡Hola! Estoy listo para analizar tus documentos. ¿Qué necesitas saber hoy?", 
      sender: 'ai',
      cita: null 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        text: "La fotosíntesis es el proceso mediante el cual las plantas transforman luz en energía química. Es fundamental para la vida en la Tierra.",
        sender: 'ai',
        cita: {
          nombreArchivo: "Guia_Botanica_2026.pdf",
          pagina: 14,
          textoOriginal: "La fotosíntesis es el proceso mediante el cual las plantas transforman energía lumínica en energía química."
        }
      };
      setMessages(prev => [...prev, response]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[650px] flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Asistente de Estudio IA</h2>
          <p className="text-xs text-slate-400">Consulta tus documentos</p>
        </div>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      
      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
        {messages.map((m) => (
          <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`p-4 rounded-2xl max-w-[85%] shadow-sm ${
              m.sender === 'user' 
              ? 'bg-indigo-600 text-white rounded-br-none' 
              : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
            }`}>
              <p className="text-sm leading-relaxed">{m.text}</p>
              
            
              {m.cita && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Fuente</span>
                    <span className="text-[10px] text-slate-400 font-medium">{m.cita.nombreArchivo} • Pág {m.cita.pagina}</span>
                  </div>
                  <p className="text-xs italic text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                    "{m.cita.textoOriginal}"
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-slate-400 italic animate-pulse">Analizando tus archivos...</div>}
      </div>

      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex gap-2">
          <input 
            className="flex-1 p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            placeholder="Pregunta algo específico sobre tus archivos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}