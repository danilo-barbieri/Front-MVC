import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LoginContainer, 
  InputField, 
  Label, 
  Input, 
  Button,
  Container
} from './styles';

const FarmaciaLogin = () => {
  return (
    
    <Container>
    <LoginContainer>
      <h2>Farmácia Login</h2>
      <InputField>
        <Label>CNPJ:</Label>
        <Input type="text" />
      </InputField>
      <InputField>
        <Label>Senha:</Label>
        <Input type="password" />
      </InputField>
      <Link to={`/pharmacy`}>
      <Button type="submit">Login</Button>
      </Link>
      <Link to="/">Voltar</Link>
    </LoginContainer>
    </Container>
  );
};

export default FarmaciaLogin;