import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import  Modal  from 'react-modal'


function App() {

    const [isNewTransactionsModal, setIsNewTransactionsModal] = useState(false);

    function handleOpenIsNewTransactionsModal(){
        setIsNewTransactionsModal(true);
    }
    function handleCloseIsNewTransactionsModal(){
        setIsNewTransactionsModal(false);
    }

  return (
    <>
      <Header />
      <Dashboard />

      <Modal  
                isOpen={isNewTransactionsModal}   
                onAfterClose={handleCloseIsNewTransactionsModal}           
                >
                    <button onClick={handleCloseIsNewTransactionsModal}> X </button>
                    <h2> Cadastrar Transação</h2>
                </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
