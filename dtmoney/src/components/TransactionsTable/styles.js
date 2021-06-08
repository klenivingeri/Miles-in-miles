import styled from "styled-components"

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem; /* boa pratica para dar espaçamento na tabela */
    
        th {
            color: var(--text-body);
            font-weight: 400;
            padding:  1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            font-weight: 500;

             &:first-child { /* se existir uma sequencia de td, aplique somente no primeiro */
                 color: var(--text-title)
             }

             &.deposit {
                 color: var(--green)
             }

             &.withdraw {
                color: var(--red)
             }
        }
    }





`
