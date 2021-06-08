import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #f8f2f8;
    --red: #E62E4D;
    --green: #33cc95;
    --blue:#5429CC;
    --blue-light:#6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape:#FFFFFF;

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }
    @media (max-width: 720){
        font-size: 87.5%; //14px
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased; // Deixa a fonte mais nitida
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

button{
    cursor: pointer
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed
}

.react-modal-overlay{

background: rgba(0,0,0,0.5);

position:fixed; // se a tela tiver scroll ele vai ficar por cima
top:0;
bottom:0;
right:0;
left:0;

display:flex;
align-items: center;
justify-content:center;
}
.react-modal-content{

    width:100%;
    max-width:576px;
    background: var(--background);
    padding:3rem; //48px
    position:relative;
    border-radius:0.25rem;
}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.8)
    }
}
`

/*

1 ) -webkit-font-smoothing: antialiased;
    hack para deixar as fontes mais nitidas

2 ) font-size: 16px (Desktop padrão)

3 ) hmtl{ Podemos usar o font-size em % com base no valor padrão de 16px 
    pode se fazer o calculo de 16x0,9375 , vamos utilizar rem, ele segue o valor padrão
    que ajudam muito na questão de acessibilidade

4 ) button{ cursor: pointer deixa todos botões "clicaveis"

5 ) disable{} cursor: not-allowed ; deixa ele como proibido

6 ) body, input, textarea, button 
    Quando passamos uma font para o body, ele não repassa para o input, text..., por padrão eles tem sua propria fonte,
    mas dessa forma subscrevemos todos eles
    Por padrao o font-weight é 500 no hmtl por isso fixar 400 que é o padrão da font Poppins



*/