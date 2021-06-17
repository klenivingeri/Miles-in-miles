import { useState } from 'react'
import  Modal  from 'react-modal'
import logoImg from '../../assets/logo.svg'

import {Container, Content } from './styles'

export function Header(){
    const [isNewTransactionsModal, setIsNewTransactionsModal] = useState(false);

    function handleOpenIsNewTransactionsModal(){
        setIsNewTransactionsModal(true);
    }
    function handleCloseIsNewTransactionsModal(){
        setIsNewTransactionsModal(false);
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenIsNewTransactionsModal}>
                    Nova transação
                </button>
                <Modal  
                isOpen={isNewTransactionsModal}   
                onAfterClose={handleCloseIsNewTransactionsModal}           
                >
                    <button onClick={handleCloseIsNewTransactionsModal}> X </button>
                    <h2> Cadastrar Transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}