import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Inicio from '../sections/Inicio';
import Progreso from '../sections/Progreso';
import ChatRAG from '../sections/ChatRAG';
import Resumenes from '../sections/Resumenes';
import Evaluaciones from '../sections/Evaluaciones';
import SalasEstudio from '../sections/SalasEstudio';

export default function MainLayout({ onLogout }) {
  const [seccion, setSeccion] = useState('inicio');

  const renderContent = () => {
    switch(seccion) {
      case 'inicio': return <Inicio />;
      case 'progreso': return <Progreso />;
      case 'rag': return <ChatRAG />;
      case 'resumenes': return <Resumenes />;
      case 'evaluaciones': return <Evaluaciones />;
      case 'salas': return <SalasEstudio />;
      default: return <Inicio />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar seccionActiva={seccion} setSeccionActiva={setSeccion} onLogout={onLogout} />
      <main className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </main>
    </div>
  );
}