import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';
import closeModal from '../../assets/closeModal.svg';
import { newError } from '../../utils/newError';
import { Form, CloseModal, Container } from './styles';

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

      const data = {
        nome: title,
        cep: props.cep,
        rua: props.street,
        city: props.city,
      };

      await api.post('/', data);

      setTimeout(() => {
        setIsLoading(false);
        props.modelResultClose();
      }, 3000);
    } catch (error) {
      const erros = document.querySelectorAll('.errorParagraph');
      erros.forEach((erro) => erro.remove());
      props.modelResultClose();
      setIsLoading(false);
      return newError('Algo deu errado tente novamente mais tarde!');
    }
  }

  return (
    <Container>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.modelResultClose}
        overlayClassName="overlayModal"
        className="modalContent"
      >
        <h1>Salvar CEP</h1>

        <Form onSubmit={sendSaveCep}>
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>

          <div>
            <button type="submit" disabled={title.length <= 2 || isLoading}>
              Salvar
            </button>
          </div>
        </Form>

        <CloseModal type="button" onClick={props.modelResultClose}>
          <img src={closeModal} alt="Fechar Modal" />
        </CloseModal>
      </Modal>
    </Container>
  );
}
