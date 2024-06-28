import React from 'react';
import { Link } from 'react-router-dom';  
import {
  Container,
  Section,
  Heading1,
  Heading2,
  UnorderedList,
  ListItem,
  Strong,
  ValidateButton,
} from './styles';

const ReceiptDetails = () => {
  const receiptData = {
    patient: {
      name: 'John Doe',
      birthdate: '1990-01-01',
      cpf: '123.456.789-00',
      healthPlan: 'Unimed',
    },
    doctor: {
      name: 'Dr. Jane Smith',
      crm: '123456',
      digitalSignature: 'https://example.com/signature.png',
    },
    medications: [
      {
        name: 'Amoxicilina',
        dosage: '2x ao dia',
        quantity: 30,
        administrationRoute: 'Oral',
        observations: 'Pós alimentação',
      },
      {
        name: 'Metformina',
        dosage: '1x ao dia',
        quantity: 15,
        administrationRoute: 'Oral',
        observations: 'Tomar em jejum',
      },
    ],
    sentAt: '20-06-2024 14:30:00',
  };

  const validateDigitalSignature = (event) => {
    event.preventDefault();
    alert('Assinatura Validada com Sucesso!');
  };

  

  return (
    <Container>
      <Heading1>Detalhes da Receita</Heading1>
      <Section>
        <Heading2>Informação do Paciente</Heading2>
        <UnorderedList>
          <ListItem>
            <Strong>Nome:</Strong> {receiptData.patient.name}
          </ListItem>
          <ListItem>
            <Strong>Data de Nascimento:</Strong> {receiptData.patient.birthdate}
          </ListItem>
          <ListItem>
            <Strong>CPF:</Strong> {receiptData.patient.cpf}
          </ListItem>
          <ListItem>
            <Strong>Plano de Saúde:</Strong> {receiptData.patient.healthPlan}
          </ListItem>
        </UnorderedList>
      </Section>
      <Section>
        <Heading2>Informações do Médico</Heading2>
        <UnorderedList>
          <ListItem>
            <Strong>Nome:</Strong> {receiptData.doctor.name}
          </ListItem>
          <ListItem>
            <Strong>CRM:</Strong> {receiptData.doctor.crm}
          </ListItem>
          <ListItem>
            <Strong>Assinatura Digital:</Strong>
            <img src={receiptData.doctor.digitalSignature} alt="Assinatura" />
          </ListItem>
        </UnorderedList>
      </Section>
      <Section>
        <Heading2>Medicamentos</Heading2>
        <UnorderedList>
          {receiptData.medications.map((medication, index) => (
            <ListItem key={index}>
              <Strong>{medication.name}</Strong>
              <UnorderedList>
                <ListItem>
                  <Strong>Dosagem:</Strong> {medication.dosage}
                </ListItem>
                <ListItem>
                  <Strong>Quantidade:</Strong> {medication.quantity}
                </ListItem>
                <ListItem>
                  <Strong>Via de Administração:</Strong> {medication.administrationRoute}
                </ListItem>
                <ListItem>
                  <Strong>Observações:</Strong> {medication.observations}
                </ListItem>
              </UnorderedList>
            </ListItem>
          ))}
        </UnorderedList>
      </Section>
      <Section>
        <Heading2>Enviado em:</Heading2>
        <p>{receiptData.sentAt}</p>
      </Section>
      <ValidateButton onClick={validateDigitalSignature}>
        Validar Assinatura Digital
      </ValidateButton>
      <Link to={`/dispense`}>
        <ValidateButton>Dispensação</ValidateButton>
      </Link>
    </Container>
  );
};

export default ReceiptDetails;