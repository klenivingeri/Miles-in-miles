import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    
    const [type, setType] = useState('deposit')


    function handleCreateNewTransaction(event : FormEvent){
        event.preventDefault();
        
        const obj ={
            title,
            value,
            category,
            type
        }
        console.log(obj)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2> Cadastrar Transação</h2>

                <input
                    placeholder="Titúlo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={ () => {setType('deposit')}}
                    isActive={type === 'deposit' }
                    activeColor="green"

                    >
                        <img src={incomeImg} alt="Entreda" />
                        <span>Entreda</span>
                    </RadioBox>

                    <RadioBox
                    type="button"
                    onClick={ () => {setType('withdraw')}}
                    isActive={type === 'withdraw' }
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>


                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}

/*

isActive vem de dentro do styles.ts

*/