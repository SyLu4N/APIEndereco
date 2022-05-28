import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

import { Local } from './interfaces/Local';

interface CepProviderProps {
  children: ReactNode;
}

interface CepContextProps {
  resultCeps: Array<Local>;
  createLocal: (value: Local) => void;
}

export const CepContext = createContext<CepContextProps>({} as CepContextProps);

export function CepProvider({ children }: CepProviderProps) {
  const [resultCeps, setResultCeps] = useState<Local[]>([]);

  useEffect(() => {
    const locaisStorage = localStorage.getItem('locais');
    const locais = JSON.parse(locaisStorage);
    setResultCeps(locais);
  }, [setResultCeps]);

  async function createLocal(cep: Local) {
    const data = {
      nome: cep.nome,
      cep: cep.cep,
      rua: cep.rua,
      cidade: cep.cidade,
      bairro: cep.bairro,
    };

    const newCeps = [...resultCeps, data];
    localStorage.setItem('locais', JSON.stringify(newCeps));
    setResultCeps(newCeps);
  }

  return (
    <CepContext.Provider value={{ resultCeps, createLocal }}>
      {children}
    </CepContext.Provider>
  );
}
