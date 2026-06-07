import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SalaProvider } from './context/SalaContext';
import Login from './components/Login';
import Registro from './components/Registro';
import MainLayout from './components/MainLayout';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [view, setView] = useState('login');

  if (!auth) {
    return view === 'login' 
      ? <Login onLogin={() => setAuth(true)} onNavigateToRegister={() => setView('registro')} />
      : <Registro onRegister={() => setAuth(true)} onNavigateToLogin={() => setView('login')} />;
  }

  return (
    <BrowserRouter>
      <SalaProvider>
        <Routes>
          
          <Route path="/join/:idSala" element={<MainLayout onLogout={() => setAuth(false)} />} />
          
          <Route path="/*" element={<MainLayout onLogout={() => setAuth(false)} />} />
        </Routes>
      </SalaProvider>
    </BrowserRouter>
  );
}