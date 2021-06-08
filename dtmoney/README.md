### Dtmoney - Rocketseat

Nesse módulo construiremos uma aplicação front-end web completa utilizando conceitos e ferramentas importantes do ecossistema React como Styled Components, MirageJS, Context API, hooks, Axios e muito mais.

 1 ) `yarn create react-app --template typescript`
 
 2 ) Passar as Dependencies @testing's @types's e typescript para devDependencies no arquivo package.json

 3 ) `yarn add styled-components`

 3.1 ) Com Styled-components criamos um arquivo style.js, importando o styled, também conseguimos usar encadeamento, o css é aplicado apenas dentro do escopo do componente.
 
 3.2 ) Se estiver usando o VsCode pode usar a extenção vscode-styled-component para dar efeito visial ao codigo.

 3.3 `yarn add @types/styled-components -D` Se for usar Typescript

 4 ) Criar dentro de src styles/global.js utilizando styled-component.

 ```
    import { createGlobalStyle } from 'styled-components'

    export const GlobalStyle = createGlobalStyle`
    
    //Css aqui

    `
 ```
 
 4.1 ) Vamos criar um exemplo em cima da tag html header, onde já existe uma pasta Header com index.tsx e o arquivo style.js
 ```
    // Header/style.js
    import styled from 'styled-components'

    export const Container = styled.header`
    //Css aqui
    `
 ```
    E importamos ele no nosso arquivo assim
```
    // Header/index.tsx
    import {Container } from './styles'

    <Container>
        //conteudo onde sera aplicado o css
    </Container>
```
 

