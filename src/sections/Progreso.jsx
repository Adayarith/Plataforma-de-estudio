import React from 'react';

export default function Progreso() {
  const metricas = [
    { titulo: 'Temas Dominados', valor: '12', color: 'text-green-600' },
    { titulo: 'Racha de Estudio', valor: '5 Días 🔥', color: 'text-orange-500' },
    { titulo: 'Horas de Estudio', valor: '24h', color: 'text-indigo-600' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-800">Mi Progreso</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricas.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium">{m.titulo}</h3>
            <p className={`text-3xl font-bold mt-2 ${m.color}`}>{m.valor}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-4">Actividad Reciente</h3>
        <div className="h-48 flex items-center justify-center bg-slate-50 rounded-lg border border-dashed text-slate-400">
          [Aquí irá un gráfico de barras de horas estudiadas por día]
        </div>
      </div>
    </div>
  );
}