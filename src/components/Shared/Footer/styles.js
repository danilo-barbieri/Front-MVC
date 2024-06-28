import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--primary);
    color: var(--gray); // Texto branco para boa legibilidade
`;


export const CopyrightText = styled.p`
    color: var(--white); // Texto branco para contrastar com o fundo azul
    font-size: 14px; // Tamanho de fonte menor para brevidade
`;
