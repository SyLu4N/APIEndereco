import React from 'react';

interface ResultProps {
  cep: string;
  street: string;
  district: string;
  city: string;
  region: string;
  isResult: boolean;
}

export function Result(props: ResultProps) {
  return (
    <div className={props.isResult ? 'result' : 'hidden'}>
      <p className="paragraph">Cep: {props.cep}</p>
      <div className="flex">
        <input type="text" className="rua" value={props.street} disabled />
        <input type="text" className="bairro" disabled value={props.district} />
      </div>
      <input type="text" className="cidade" disabled value={props.city} />
      <input type="text" className="uf" disabled value={props.region} />
    </div>
  );
}
