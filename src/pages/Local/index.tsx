import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { ImBin } from 'react-icons/im';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

import { CepContext } from '../../CepContext';
import { api } from '../../services/api';
import voidLocais from '../../assets/voidLocais.svg';
import { Container, Content, Locais, Void } from './styled';
import { Link } from 'react-router-dom';

export function Local() {
  const { resultCeps } = useContext(CepContext);
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const newCeps = [...resultCeps];
    setLocais(newCeps);
  }, [resultCeps]);

  async function handleDelete(e: FormEvent, index: number): Promise<void> {
    e.preventDefault();

    const local = resultCeps[index].id;

    const newCep = [...locais];
    newCep.splice(index, 1);
    resultCeps.splice(index, 1);
    setLocais(newCep);

    await api.delete(`/${local}`);
  }

  return (
    <>
      {locais.length >= 1 ? (
        <Locais>
          <Container>
            {locais.map((local, index) => (
              <Content key={local.id}>
                <span>{local.nome}</span> <div>|</div>
                <p>{`${local.rua}, ${local.bairro} - ${local.cidade}`}</p>
                <a href="" onClick={(e) => handleDelete(e, index)}>
                  <abbr title="Excluir">
                    <ImBin />
                  </abbr>
                </a>
              </Content>
            ))}
          </Container>
          <div className="back">
            <Link to="/">
              <BsFillArrowLeftSquareFill size={20} /> Voltar
            </Link>
          </div>
        </Locais>
      ) : (
        <Void>
          <div>
            <h2>Ainda não temos locais salvos</h2>
            <p>Vamos salvar novos contatos?</p>
            <div>
              <Link to="/">Salvar novos locais</Link>
            </div>
          </div>
          <img src={voidLocais} alt="Tela em construção" />
        </Void>
      )}
    </>
  );
}
