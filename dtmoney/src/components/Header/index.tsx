import logoImg from '../../assets/logo.svg'
import {Container, Content } from './styles'

interface HeaderProps{
    onOpenIsNewTransactionsModal: () => void;
}

export function Header({ onOpenIsNewTransactionsModal } : HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenIsNewTransactionsModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}