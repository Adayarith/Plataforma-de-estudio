import React from 'react';

export default function Sidebar({ seccionActiva, setSeccionActiva, onLogout }) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '📂' },
    { id: 'progreso', label: 'Mi Progreso', icon: '📊' },
    { id: 'rag', label: 'Chat con IA ', icon: '💬' },
    { id: 'resumenes', label: 'Resúmenes', icon: '📝' },
    { id: 'evaluaciones', label: 'Flashcards/Exámenes', icon: '🃏' },
    { id: 'salas', label: 'Salas de Estudio', icon: '👥' },
  ];

  return (
    <div className="w-72 bg-slate-900 text-white flex flex-col h-screen shadow-2xl">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-indigo-400">Vectra</h1>
        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Panel de Control</p>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSeccionActiva(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
              seccionActiva === item.id 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors"
        >
          <span>🚪</span> Cerrar Sesión
        </button>
      </div>
    </div>
  );
}