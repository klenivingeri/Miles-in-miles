import styled from "styled-components"

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas 1fr de tamanhos iguais */
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding:  1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; /* por padrão o strong vem inline,e o margin não funciona */
            margin-top:1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highlight-background{
            background: var(--green);
            color:#fff;
        }
    }
    
`
/* 
    grid-template-columns: repeat(3, 1fr);
    3 colunas 1fr de tamanhos iguais
    ou
    grid-template-columns: (1fr, 1fr, 1fr);
    3 colunas de tamanhos iguais
*/