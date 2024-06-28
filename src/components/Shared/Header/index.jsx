import React from 'react';
import { HeaderContainer, Logo, Title, Navigation, NavLink } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="/caminho/para/o/logo.png" alt="Nome da Farmácia/Hospital" />
            <Title>Integração Hospital-Farmácia</Title>
            <Navigation>
                <NavLink href="/">Home</NavLink>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;
