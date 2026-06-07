import React, { useState } from 'react';

export default function Login({ onLogin, onNavigateToRegister }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-4xl flex bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 min-h-[500px]">
        
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Bienvenido</h1>
            <p className="text-slate-500">Accede a tus documentos, salas y tutoría IA.</p>
          </div>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
            />
            
            <button 
              onClick={onLogin}
              className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Iniciar Sesión
            </button>
          </div>

          <p className="mt-8 text-center text-slate-400 text-sm">
            ¿No tienes cuenta?{' '}
            <button onClick={onNavigateToRegister} className="text-indigo-600 font-bold hover:underline">
              Regístrate
            </button>
          </p>
        </div>

        <div className="hidden lg:flex w-1/2 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
            alt="Estudiantes colaborando" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/60 flex flex-col justify-center p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Tu conocimiento, potenciado por IA</h3>
            <p className="text-indigo-100/90 text-lg">
              Sube tus PDFs, genera resúmenes y consulta tus dudas con inteligencia artificial en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}