import React from 'react';
import { 
  DispensacaoContainer, 
  Title, 
  Paragraph, 
  FormContainer, 
  InputField, 
  Label, 
  Input, 
  Button, 
} from './styles';

const Dispensacao = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Medicação enviada com sucesso!');
  };

  return (
    <DispensacaoContainer>
      <Title>Dispensação de Medicamentos</Title>
      <Paragraph>Selecione a receita e os medicamentos a serem dispensados:</Paragraph>
      <FormContainer>
        <InputField>
          <Label>Receita:</Label>
          <Input type="text" />
        </InputField>
        <InputField>
          <Label>Medicamentos:</Label>
          <Input type="text" />
        </InputField>
        <InputField>
          <Label>Quantidade:</Label>
          <Input type="number" />
        </InputField>
        <InputField>
          <Label>Farmacêutico:</Label>
          <Input type="text" />
        </InputField>
        <Button type="submit" onClick={handleSubmit}>Dispensar</Button>
      </FormContainer>
    </DispensacaoContainer>
  );
};

export default Dispensacao;