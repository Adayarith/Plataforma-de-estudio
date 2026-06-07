import React, { useState } from 'react';
import { FileText, Sparkles, Copy, Download, Loader2 } from 'lucide-react';

export default function Resumenes() {
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [resumen, setResumen] = useState('');
  const [cargando, setCargando] = useState(false);

  const misArchivos = [
    { id: 1, nombre: 'Apuntes_Calculo.pdf', paginas: 12 },
    { id: 2, nombre: 'Presentacion_IA.pptx', paginas: 24 }
  ];

  const generarResumen = () => {
    if (!archivoSeleccionado) return alert("Selecciona un archivo");
    setCargando(true);
    setTimeout(() => {
      setResumen(`### Puntos clave de ${archivoSeleccionado.nombre}\n\n1. **Concepto Fundamental:** La IA generativa utiliza modelos de lenguaje para predecir secuencias.\n2. **Arquitectura:** Se basa en transformadores que permiten el procesamiento paralelo.\n3. **Aplicaciones:** Automatización de tareas, análisis de documentos y generación de código.`);
      setCargando(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-extrabold text-slate-900">Resumen</h2>
        <p className="text-slate-500">Transforma documentos extensos en segundos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2"><FileText size={20}/> Tus Documentos</h3>
          {misArchivos.map(f => (
            <div 
              key={f.id}
              onClick={() => setArchivoSeleccionado(f)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${archivoSeleccionado?.id === f.id ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 hover:border-indigo-200'}`}
            >
              <p className="font-semibold text-slate-800">{f.nombre}</p>
              <p className="text-xs text-slate-400">{f.paginas} páginas</p>
            </div>
          ))}
          
          <button 
            onClick={generarResumen}
            disabled={!archivoSeleccionado || cargando}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 disabled:bg-slate-300 transition-all"
          >
            {cargando ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            {cargando ? 'Analizando...' : 'Generar Resumen '}
          </button>
        </div>

        <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col">
          {resumen ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <h3 className="font-bold text-xl text-slate-800">Resumen Generado</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg"><Copy size={18} /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg"><Download size={18} /></button>
                </div>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600">
                {resumen.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-4">
              <Sparkles size={48} className="opacity-20" />
              <p>Selecciona un archivo y presiona "Generar Resumen"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}