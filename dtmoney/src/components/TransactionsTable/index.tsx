import { useContext } from "react";
import { TransactionsContext } from "../../context/transactionsContext";

import { Container } from "./styles";

export function TransactionsTable(){
  const  { transactions }  = useContext(TransactionsContext)
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     transactions.map( transaciton =>(
                      <tr key={transaciton.id}>
                      <td>{transaciton.title}</td>
                      <td className={transaciton.type}>
                        { new Intl.NumberFormat('pt-BR',{
                          style: 'currency',
                          currency: 'BRL'
                        }).format(transaciton.amount)}
                      </td>
                      <td>{transaciton.category}</td>
                      <td>
                        {new Intl.DateTimeFormat('pt-BR').format(
                          new Date(transaciton.createdAt)
                        )}
                        </td>
                      </tr>
                     ))
                   }
                </tbody>
            </table>
        </Container>
    )
}
