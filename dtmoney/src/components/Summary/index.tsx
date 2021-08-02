import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../context/transactionsContext';

import { Container } from "./styles";

export function Summary(){
  const  transactions  = useContext(TransactionsContext)
  console.log(transactions)
    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    R$ 1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Saída" />
                </header>
                <strong>
                    - R$ 500,00
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
        </Container>
    )
}
