import React, { useState } from 'react';
import { Upload, Search, FileText, Trash2, FileUp, CheckCircle, Clock } from 'lucide-react';
import { useSala } from '../context/SalaContext';

export default function Inicio() {
  const context = useSala();
  const salaActual = context?.salaActual || null;
  const rolUsuario = context?.rolUsuario || 'owner';

  const [busqueda, setBusqueda] = useState('');
  const [archivos, setArchivos] = useState([
    { id: 1, nombre: 'Apuntes_Calculo.pdf', estado: 'Procesado' },
    { id: 2, nombre: 'Presentacion_IA.pptx', estado: 'Pendiente' }
  ]);

  const borrarArchivo = (id) => setArchivos(archivos.filter(a => a.id !== id));
  const puedeEditar = !salaActual || (rolUsuario === 'owner' || rolUsuario === 'editor');
  const archivosFiltrados = archivos.filter(a => a.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-4xl font-extrabold text-slate-900">Mis Documentos</h2>
        <p className="text-slate-500">Gestiona el material de estudio.</p>
      </div>
      {puedeEditar && (
        <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-12 flex flex-col items-center justify-center bg-indigo-50/50 hover:bg-indigo-50 transition-all cursor-pointer">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            <FileUp className="text-indigo-600" size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Arrastra tus archivos aquí</h3>
          <p className="text-sm text-slate-500 mt-1">Soporta PDF, PPTX y más (máx 20MB)</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6 bg-slate-50 p-2 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text"
            placeholder="Buscar en tus documentos..."
            className="bg-transparent w-full outline-none py-1"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        <div className="space-y-3">
          {archivosFiltrados.length > 0 ? (
            archivosFiltrados.map(archivo => (
              <div key={archivo.id} className="flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{archivo.nombre}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {archivo.estado === 'Procesado' ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-600"><CheckCircle size={12}/> Listo</span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-600"><Clock size={12}/> Procesando</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {puedeEditar && (
                  <button 
                    onClick={() => borrarArchivo(archivo.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400 py-10">No se encontraron documentos.</p>
          )}
        </div>
      </div>
    </div>
  );
}