import React, { FormEvent, useState } from 'react';

interface SaveProsp {
  cep: string;
  street: string;
}

export function Save(props: SaveProsp) {
  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form className="save" onSubmit={handleSubmit}>
      <input
        maxLength={12}
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={name.length < 2}>Salvar</button>
    </form>
  );
}
