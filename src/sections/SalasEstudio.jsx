import React, { useState } from 'react';

export default function SalasEstudio() {
  const [salaActiva, setSalaActiva] = useState(null);
  const [modalCrearAbierto, setModalCrearAbierto] = useState(false);
  const [modalInvitacionAbierto, setModalInvitacionAbierto] = useState(false);
  const [nuevaSala, setNuevaSala] = useState({ nombre: '', materia: '' });
  
  const [salas, setSalas] = useState([
    { id: 1, nombre: "Grupo de Estudio: Anatomía II", miembros: 12, materias: "Medicina", owner: "Karla" },
    { id: 2, nombre: "Cálculo Integral - Nocturno", miembros: 5, materias: "Ingeniería", owner: "Pedro" },
  ]);

  const miembrosSala = [
    { id: 101, nombre: "Karla (Tú)", rol: "Owner", online: true },
    { id: 102, nombre: "Juan Pérez", rol: "Editor", online: true },
    { id: 103, nombre: "Maria Lopez", rol: "Viewer", online: false },
  ];

  const crearSala = () => {
    if (!nuevaSala.nombre || !nuevaSala.materia) return alert("Completa todos los campos");
    
    const nueva = {
      id: Date.now(),
      nombre: nuevaSala.nombre,
      miembros: 1,
      materias: nuevaSala.materia,
      owner: "Tú"
    };
    
    setSalas([...salas, nueva]);
    setSalaActiva(nueva);
    setModalCrearAbierto(false);
    setNuevaSala({ nombre: '', materia: '' });
  };

  const BadgeRol = ({ rol }) => {
    const estilos = {
      Owner: "bg-amber-100 text-amber-700 border-amber-200",
      Editor: "bg-blue-100 text-blue-700 border-blue-200",
      Viewer: "bg-slate-100 text-slate-600 border-slate-200"
    };
    return (
      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${estilos[rol] || estilos.Viewer}`}>
        {rol}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Salas de Estudio</h2>
          <p className="text-slate-600">Colabora y comparte materiales.</p>
        </div>
        <button 
          onClick={() => setModalCrearAbierto(true)}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md"
        >
          + Crear Nueva Sala
        </button>
      </div>

      {modalCrearAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Crear Sala</h3>
            <input 
              placeholder="Nombre de la sala" 
              className="w-full p-3 border border-slate-200 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={nuevaSala.nombre}
              onChange={(e) => setNuevaSala({...nuevaSala, nombre: e.target.value})}
            />
            <input 
              placeholder="Materia" 
              className="w-full p-3 border border-slate-200 rounded-lg mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={nuevaSala.materia}
              onChange={(e) => setNuevaSala({...nuevaSala, materia: e.target.value})}
            />
            <div className="flex gap-3">
              <button onClick={() => setModalCrearAbierto(false)} className="flex-1 py-2 text-slate-600 font-medium">Cancelar</button>
              <button onClick={crearSala} className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">Crear</button>
            </div>
          </div>
        </div>
      )}

      {modalInvitacionAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Invitar a {salaActiva?.nombre}</h3>
            <p className="text-sm text-slate-500 mb-6">Comparte este enlace con tus compañeros:</p>
            <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 text-sm font-mono text-indigo-600 mb-6 break-all">
              estudio.app/join/{salaActiva?.id}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModalInvitacionAbierto(false)} className="flex-1 py-2 text-slate-600 font-medium">Cerrar</button>
              <button 
                onClick={() => { 
                  navigator.clipboard.writeText(`estudio.app/join/${salaActiva?.id}`); 
                  alert("Enlace copiado al portapapeles"); 
                }} 
                className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
              >
                Copiar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {salas.map((sala) => (
            <div 
              key={sala.id}
              onClick={() => setSalaActiva(sala)}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer bg-white ${
                salaActiva?.id === sala.id ? 'border-indigo-500 shadow-md' : 'border-slate-100 hover:border-indigo-200'
              }`}
            >
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{sala.materias}</span>
              <h4 className="text-xl font-bold text-slate-800 mt-1">{sala.nombre}</h4>
              <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                <span>👥 {sala.miembros} Miembros</span>
                <span>👑 Host: {sala.owner}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-fit">
          <div className="p-5 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">
              {salaActiva ? `Miembros: ${salaActiva.nombre}` : 'Selecciona una sala'}
            </h3>
          </div>
          <div className="p-4">
            {salaActiva ? (
              <div className="space-y-4">
                {miembrosSala.map((m) => (
                  <div key={m.id} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">{m.nombre}</span>
                    <BadgeRol rol={m.rol} />
                  </div>
                ))}
                <button 
                  onClick={() => setModalInvitacionAbierto(true)}
                  className="w-full py-2 mt-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  ➕ Invitar Amigo
                </button>
              </div>
            ) : (
              <p className="text-center py-12 text-slate-400">Elige una sala para ver detalles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}