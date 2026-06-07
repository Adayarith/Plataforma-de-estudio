import React, { useState } from 'react';

export default function Registro({ onRegister, onNavigateToLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-4xl flex flex-row-reverse bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 min-h-[600px]">
        
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Crea tu cuenta</h1>
            <p className="text-slate-500">Únete a la comunidad de estudio potenciada por IA.</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
               <input 
                type="text" 
                placeholder="Nombre" 
                className="w-1/2 p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" 
              />
              <input 
                type="text" 
                placeholder="Apellido" 
                className="w-1/2 p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" 
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Correo institucional o personal" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" 
            />
            
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm" 
            />
            
            <div className="flex items-center gap-2 px-2">
              <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <label className="text-xs text-slate-500">Acepto los términos de uso y políticas de privacidad.</label>
            </div>

            <button 
              onClick={onRegister}
              className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 mt-2"
            >
              Empezar ahora
            </button>
          </div>

          <p className="mt-8 text-center text-slate-400 text-sm">
            ¿Ya eres miembro?{' '}
            <button onClick={onNavigateToLogin} className="text-indigo-600 font-bold hover:underline">
              Inicia sesión
            </button>
          </p>
        </div>

        <div className="hidden lg:flex w-1/2 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
            alt="Estudiantes colaborando" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/70 flex flex-col justify-end p-12 text-white">
            <div className="mb-4">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Nueva Generación</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Ahorra horas de estudio cada semana</h3>
            <p className="text-indigo-100/90 text-lg">
              Deja que la IA organice tus fuentes y cree flashcards mientras tú te enfocas en aprender lo que realmente importa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}