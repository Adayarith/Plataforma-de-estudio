import React, { useState } from 'react';
import { BookOpen, BrainCircuit, ListChecks, HelpCircle, ChevronRight, Sparkles, Loader2 } from 'lucide-react';

export default function Evaluaciones() {
  const [archivo, setArchivo] = useState(null);
  const [tipo, setTipo] = useState('multiple');
  const [generando, setGenerando] = useState(false);

  const misArchivos = [
    { id: 1, nombre: 'Apuntes_Calculo.pdf' },
    { id: 2, nombre: 'Presentacion_IA.pptx' }
  ];

  const opciones = [
    { id: 'multiple', nombre: 'Opción Múltiple', icon: ListChecks },
    { id: 'vf', nombre: 'Verdadero / Falso', icon: HelpCircle },
    { id: 'flashcards', nombre: 'Flashcards', icon: BrainCircuit }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
          <BookOpen size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Evaluaciones IA</h2>
          <p className="text-slate-500">Pon a prueba tu conocimiento con exámenes generados a medida.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">1. Elige tu material</h3>
          <div className="space-y-3">
            {misArchivos.map(f => (
              <div 
                key={f.id}
                onClick={() => setArchivo(f.id)}
                className={`p-4 border rounded-xl cursor-pointer flex justify-between items-center transition-all ${archivo === f.id ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-indigo-200'}`}
              >
                <span className="font-medium text-slate-700">{f.nombre}</span>
                {archivo === f.id && <div className="w-3 h-3 bg-indigo-600 rounded-full" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">2. Tipo de práctica</h3>
          <div className="grid grid-cols-1 gap-3">
            {opciones.map(opt => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  onClick={() => setTipo(opt.id)}
                  className={`flex items-center gap-3 p-4 border rounded-xl transition-all ${tipo === opt.id ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 text-slate-600 hover:border-indigo-200'}`}
                >
                  <Icon size={20} />
                  <span className="font-semibold">{opt.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-1">¿Listo para practicar?</h3>
          <p className="text-indigo-200">La IA creará una evaluación basada específicamente en tu documento seleccionado.</p>
        </div>
        <button 
          onClick={() => setGenerando(true)}
          disabled={!archivo || generando}
          className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all disabled:opacity-50"
        >
          {generando ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
          {generando ? 'Generando...' : 'Crear evaluación ahora'}
        </button>
      </div>
    </div>
  );
}