import { Container } from './styles'
import Modal from 'react-modal';
import CloseImg from '../../assets/close.svg'

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onAfterClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2> Cadastrar Transação</h2>

                <input
                    placeholder="Titúlo"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}