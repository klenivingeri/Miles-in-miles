import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
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
  createTransactions: (Transaction:TransactionInput ) => Promise<void>; // apenas se a função for async
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

    async function createTransactions(transactionInput : TransactionInput){
      const response =  await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()
      })
      const { transaction } = response.data;
      setTransactions([
        ...transactions,
        transaction
      ])
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

export function useTransacitions(){
   const  context = useContext(TransactionsContext);
   return context;
}
