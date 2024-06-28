import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19px;
    background-color: var(--primary); 
    color: white; 
`;

export const Logo = styled.img`
    height: 60px; 
    width: auto;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.h1`
    margin-left: -18%;
    font-size: 24px; // Tamanho de fonte grande para impacto
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 30px; // Espaçamento maior para clareza
`;

export const NavLink = styled.a`
    color: white; // Texto branco para contrastar com o fundo azul
    text-decoration: none;
    font-weight: bold; // Destaca os links
    transition: color 0.3s ease;

    &:hover {
        color: #ffffffcc; // Sombra branca para indicar hover
    }
`;
