import React, { createContext, useState, useContext } from 'react';

const SalaContext = createContext();

export function SalaProvider({ children }) {
  const [salaActual, setSalaActual] = useState(null);
  const [rolUsuario, setRolUsuario] = useState(null); 
  const cambiarSala = (sala, rol) => {
    setSalaActual(sala);
    setRolUsuario(rol);
  };

  return (
    <SalaContext.Provider value={{ salaActual, rolUsuario, cambiarSala }}>
      {children}
    </SalaContext.Provider>
  );
}

export const useSala = () => useContext(SalaContext);