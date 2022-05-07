import React from 'react';
import Modal from 'react-modal';

import closeModal from '../assets/closeModal.svg';

interface ModalResultProps {
  isOpen: boolean;
  modelResultClose: () => void;
  cep: string;
}

export function ModalResult(props: ModalResultProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.modelResultClose}
      overlayClassName="overlayModal"
      className="modalContent"
    >
      <h1>Salvar CEP</h1>

      <form className="flexModal">
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
          />
        </label>

        <div>
          <button type="submit">Salvar</button>
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
