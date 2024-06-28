import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LoginContainer, 
  InputField, 
  Label, 
  Input, 
  Button,
  Container, 
} from './styles';

const MedicoLogin = () => {
  return (
    <Container>
    <LoginContainer>
      <h2>Médico Login</h2>
      
      <InputField>
        <Label>CRM:</Label>
        <Input type="text" />
      </InputField>
      <InputField>
        <Label>Senha:</Label>
        <Input type="password" />
      </InputField>
      <InputField>
      <Label>Ou acesse com seu Certificado</Label>
      </InputField>
      <InputField>
        <Label>Certificado digital:</Label>
        <Input type="file" />
      </InputField>
      <Link to={`/doctor`}>
      <Button type="submit">Login</Button>
      </Link>
      <Link to="/">Voltar</Link>
    </LoginContainer>
    </Container>
  );
};

export default MedicoLogin;