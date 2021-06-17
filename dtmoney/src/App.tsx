import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import  Modal  from 'react-modal'

// Deixa o modal por cima da do elemento root, ajuda na acesibilidade (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

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
      <Header onOpenIsNewTransactionsModal={handleOpenIsNewTransactionsModal} />
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
