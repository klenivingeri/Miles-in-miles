import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction{
  id: number;
  title:string;
  amount: number;
  type: string;
  category: string;
  createdAt: string
}

/*
interface TransactionInput{
  title:string;
  amount: number;
  type: string;
  category: string;
}
*/
//Cria um novo type omitindo id e createdAt
type  TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextData{
  transactions : Transaction[];
  createTransactions: (Transaction:TransactionInput ) => void;
}

interface TransactionsProviderProps{ //context e Hooks aula 3
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextData>({}  as TransactionContextData);

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [ transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(()=>{
      api.get('transactions')
      .then( response => setTransactions(response.data.transactions))
    },[])

    function createTransactions(transactions : TransactionInput){
      api.post('/transactions', transactions)
    }

    return(
      <TransactionsContext.Provider value={{
        transactions,
        createTransactions
      }}>
        {children}
      </TransactionsContext.Provider>
    )
}
