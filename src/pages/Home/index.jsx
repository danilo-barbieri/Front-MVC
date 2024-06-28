import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HomePageContainer, 
  Title, 
  Paragraph, 
  FormContainer, 
  RoleSelect,  
  Button,
  Container, 
} from './styles';

const Home = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = () => {
    if (role === 'medico') {
      navigate('/medico-login');
    } else if (role === 'farmacia') {
      navigate('/farmacia-login');
    }
  };

  return (
    <Container>
    <HomePageContainer>
      <Title>Acesso do Sistema!</Title>
      <Paragraph>Selecione seu Acesso</Paragraph>
      <FormContainer>
        <RoleSelect value={role} onChange={handleRoleChange}>
          <option value="">Selecione a Função</option>
          <option value="medico">Médico</option>
          <option value="farmacia">Farmácia</option>
        </RoleSelect>
        <Button type="button" onClick={handleLogin}>
          {role === 'medico' ? 'Médico' : 'Farmácia'}
        </Button>
      </FormContainer>
    </HomePageContainer>
    </Container>
  );
};

export default Home;