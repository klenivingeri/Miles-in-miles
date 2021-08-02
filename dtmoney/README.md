## Dtmoney - Rocketseat

Nesse módulo construiremos uma aplicação front-end web completa utilizando conceitos e ferramentas importantes do ecossistema React como Styled Components, MirageJS, Context API, hooks, Axios e muito mais.

 1 ) `yarn create react-app --template typescript`
 
 2 ) Passar as Dependencies @testing's @types's e typescript para devDependencies no arquivo package.json.

 3 ) `yarn add styled-components`

 3.1 ) Com Styled-components criamos um arquivo style.js, importando o styled, também conseguimos usar encadeamento, o css é aplicado apenas dentro do escopo do componente.
 
 3.2 ) Se estiver usando o VsCode pode usar a extenção vscode-styled-component para dar efeito visial ao codigo.

 3.3 `yarn add @types/styled-components -D` Se for usar Typescript

 4 ) Criar dentro de src styles/global.js utilizando styled-component.

 ~~~Javascript
    import { createGlobalStyle } from 'styled-components'

    export const GlobalStyle = createGlobalStyle`/* Css aqui */`
    

~~~
 
4.1 ) Vamos criar um exemplo da tag html header, onde já existe uma pasta Header com index.tsx e o arquivo style.js.

~~~Javascript
    /* Header/style.js */
    import styled from 'styled-components'

    export const Container = styled.header`/* Css aqui */`
    
    
    /* importamos ele no nosso arquivo assim */
    /* Header/index.tsx */
    import { Container } from './styles'

    <Container>
         // container onde será aplicado o css
    </Container>
~~~
  
4.2 ) Usamos o "&" quando queremos nos referenciar ao mesmo elemento,
    seria a mesma coisa que `input::placeholder{}`
~~~scss
input{

    &::placeholder{
        color: var(--text-body); 
    }

    & + input { /* hack, & Pegue todos os input apartir do segundo e aplique */
        margin-top: 1rem;
    }
}
~~~
 5 ) `yarn add miragejs` Utilizado  no desenvolvimento do front-end para fornecer dados dinamicos, sem precisar do back-end.


 ~~~Javascript
    /* index.tsx */
    import { createServer } from 'miragejs'

    createServer({
    routes() {
        this.namespace = 'api';
        /* informa que todas as chamadas vão estar apartir de 'api'  */
        this.get('/transactions', () => { /* chamada para rota  */
        return [
            {
            id:1,
            title: 'transacitions 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createdAt: new Date()
            }
        ]
        })
    }
    })

    /* comsumindo nossa api  */
    useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
        .then( response => response.json())
        .then( data => console.log(data))
    },[])
~~~


 6 ) `yarn add axios`  axios é um lib especializada em reaquisições.
 Como vamos buscar dados, uma boa pratica é criar uma pasta services/api.js
 ~~~Javascript
    /* services/api.js */
    import axios from 'axios';

    export const api = axios.create({
        
    baseURL: 'http://localhost:3000/api',
    
    })
    

    /* comsumindo nossa api  */
    import { api } from "../../services/api";

    useEffect(()=>{
        api.get('transactions')
        .then( response => console.log(response.data))
        },[])
~~~

 7 ) `yarn add react-modal`  `yarn add @types/react-modal -D`, ver mais sobre ['React-modal'](https://github.com/reactjs/react-modal)
 ~~~Javascript
 
    /* App.tsx */
    import { useState } from 'react'
    import  Modal  from 'react-modal'

    const [isNewTransactionsModal, setIsNewTransactionsModal ] = useState(false);

    function handleOpenIsNewTransactionsModal(){
        setIsNewTransactionsModal(true)
    }
    function handleCloseIsNewTransactionsModal(){
        setIsNewTransactionsModal(false)
    }
    
    // consumindo Modal
    <Modal  
    isOpen={isNewTransactionsModal} //var
    onAfterClose={handleCloseIsNewTransactionsModal} //function          
    >
        <button onClick={handleCloseIsNewTransactionsModal}> close </button>
        <h2> Cadastrar Transação</h2>
    </Modal>

    // continua  8 )

 ~~~

 8 ) Repasse de propriedades, no exemplo abaixo estamos recebendo um evento de click do nosso componente filho, e executando uma função no elemento pai

~~~Javascript
    /* App.tsx  - pai */
    export function App{
    
      function handleOpenIsNewTransactionsModal() {
     /* Executa o escopo */
    }

    return(
        <Header onOpenIsNewTransactionsModal={handleOpenIsNewTransactionsModal} />
    )
~~~
~~~Javascript
    /* components/Header - filho */
    interface HeaderProps{
        onOpenIsNewTransactionsModal: () => void; // passando uma função sem retorno como propriedade
    }
    export function Header({ onOpenIsNewTransactionsModal } : HeaderProps){
        return(
            <button type="button" onClick={onOpenIsNewTransactionsModal}>
                Nova transação
            </button>
        )
    }
~~~

8.1 ) As propriedade do elemento Modal estão sendo alterada no arquivo global.ts
~~~Javascript
       <Modal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        </Modal>
~~~
~~~scss
    /* global.ts*/
.react-modal-overlay{} 
.react-modal-content{}
//.react-modal-close{}
~~~

8.2 ) Modal - Trabalhando com contexto, estamos abrindo o modal em um componente filho, que passa a informação para o componente pai, que repassa para o seu outro component filho.

Component filho -> Component Pai -> Component filho


9 ) `yarn add polished`


## Dicas:

 `<img>` - Importando imagens

 ~~~Javascript
    import CloseImg from '../../assets/close.svg'

    <img src={CloseImg} alt="Close" />
~~~

 `polished` - Como estamos usando Styled Component, temos arquivos JS que manipulam Css, dessa form conseguimos usar scripts helpers, que ajudam na manipulação do Css
 
 ~~~Javascript
    // NewTransactionsModal/styles.ts
    import styled from 'styled-components'
    import { darken } from 'polished'

    export const Container = styled.div`
        button{
        border: 1px solid #d7d7d7;
        transition: border-color 0.2s;

            &:hover{
                border-color: ${darken(0.1, '#d7d7d7')}
            }
        }
    `;
~~~

`Styled.component` - Quase nunca utilizamos className, dentro do arquivo styles.ts consequimos fazer a typing e criar atributos dentro dos elementos

 ~~~Javascript
    // NewTransactionsModal/styles.ts
    import styled from 'styled-components'
    import { darken, transparentize } from 'polished'

    interface RadioBoxProps {
    isActive:Boolean;
    activeColor: 'green' | 'red';
    }

    const colors = {
        green:'#33cc95',
        red: '#E52E4D'
    }

    export const RadioBox = styled.button<RadioBoxProps>`
    
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive 
            ? transparentize(0.9, colors[props.activeColor]) 
            : 'transparent'};
    `;

    // NewTransactionsModal/index.tsx

    <RadioBox
        type="button"
        onClick={ () => {setType('deposit')}}
        isActive={ type === 'deposit' } //*
        activeColor="green" //*
    >
            <img src={incomeImg} alt="Entreda" />
            <span>Entreda</span>
    </RadioBox>
~~~

`Form` -  Cancelando o envio do form e pegando os dados

~~~Javascript
    // /index.tsx
    export function Forms(){

        const [title, setTitle] = useState('')
        const [value, setValue] = useState(0)

        console.log({title, value})

        // onSubmit envia o event como parametro, type FormEvent
        function handleForms(event: FormEvent){
            //event.preventDefault() cancela o envio do formulario
            event.preventDefault();

        }
        return(

            <form onSubmit={handleForms}>
            
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

                <button type="submit">
                    Cadastrar
                </button>

            </form>
        )
    }

    
~~~