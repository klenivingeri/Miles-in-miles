import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../context/transactionsContext";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction{
  id: number;
  title:string;
  amount: number;
  type: string;
  category: string;
  createdAt: string
}

export function TransactionsTable(){

  const [ transactions, setTransactions] = useState<Transaction[]>([]);
  const  data  = useContext(TransactionsContext)
  console.log(data)
    useEffect(()=>{
        api.get('transactions')
        .then( response => setTransactions(response.data.transactions))
        },[])


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
