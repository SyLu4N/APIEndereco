import React, { FormEvent } from 'react';

interface FormProps {
  onHandleSubmit: (e: FormEvent) => void;
  onValidCep: (e: string) => void;
  onCep: string;
}

export function Form({ onHandleSubmit, onValidCep, onCep }: FormProps) {
  return (
    <form className="form" onSubmit={(e) => onHandleSubmit(e)}>
      <label htmlFor="">
        <p className="paragraph">Digite seu CEP:</p>
        <input
          placeholder="Ex: 08474012"
          maxLength={onCep.indexOf('-') === -1 ? 8 : 9}
          type="string"
          className="CEP success"
          onChange={(e) => onValidCep(e.target.value)}
          value={onCep}
        />
        <button className="button">Buscar CEP</button>
      </label>
    </form>
  );
}
