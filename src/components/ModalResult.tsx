import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../services/api';
import closeModal from '../assets/closeModal.svg';
import { newError } from '../utils/newError';

interface ModalResultProps {
  isOpen: boolean;
  modelResultClose: () => void;
  cep: string;
  street: string;
  city: string;
}

export function ModalResult(props: ModalResultProps) {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function sendSaveCep(e: FormEvent) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const dataEnv = {
        nome: title,
        cep: props.cep,
        rua: props.street,
        city: props.city,
      };
      await api.post('/', dataEnv);
      setTimeout(async () => {
        setIsLoading(false);
        props.modelResultClose();
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      return newError('Algo deu errado tente novamente mais tarde!');
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.modelResultClose}
      overlayClassName="overlayModal"
      className="modalContent"
    >
      <h1>Salvar CEP</h1>

      <form className="flexModal" onSubmit={sendSaveCep}>
        <label htmlFor="">
          <p>CEP</p>
          <input
            type="text"
            value={props.cep}
            disabled
            className="inputModalCep"
          />
        </label>
        <label htmlFor="lugar">
          <p>Adicionar um lugar:</p>
          <input
            type="text"
            placeholder="Ex: Trabalho"
            className="inputModalAdd"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <div>
          <button type="submit" disabled={title.length <= 2 || isLoading}>
            Salvar
          </button>
        </div>
      </form>

      <button
        className="closeModal"
        type="button"
        onClick={props.modelResultClose}
      >
        <img src={closeModal} alt="Fechar Modal" />
      </button>
    </Modal>
  );
}
