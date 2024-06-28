import React, { useState } from 'react';
import { Container, Section, Heading1, UnorderedList, ListItem, Button, ReceiptDetails } from './styles';
import { Link } from 'react-router-dom';

const receipts = [
  {
    id: 1,
    date: '2022-01-01',
    patientName: 'João Silva',
    medicines: [
      { name: 'Paracetamol', dose: '2x ao dia' },
      { name: 'Ibuprofeno', dose: '3x ao dia' },
    ],
  },
  {
    id: 2,
    date: '2022-01-05',
    patientName: 'Maria Oliveira',
    medicines: [
      { name: 'Amoxicilina', dose: '3x ao dia' },
      { name: 'Vitamina C', dose: '1x ao dia' },
    ],
  },
  {
    id: 3,
    date: '2022-01-10',
    patientName: 'Pedro Sousa',
    medicines: [
      { name: 'Insulina', dose: '2x ao dia' },
      { name: 'Metformina', dose: '3x ao dia' },
    ],
  },
];

const ReceiptsList = () => {
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const handleSelectReceipt = (receipt) => {
    setSelectedReceipt(receipt);
  };

  return (
    <Container>
      <Section>
        <Heading1>Receitas Enviadas</Heading1>
        <UnorderedList>
          {receipts.map((receipt, index) => (
            <ListItem key={index}>
              <strong>{receipt.date}</strong> - {receipt.patientName}
              <div>
                <Button onClick={() => handleSelectReceipt(receipt)}>Ver Detalhes</Button>
                <Link to={`/receipts/${receipt.id}`}>
                  <Button>Verificar Receita</Button>
                </Link>
              </div>
            </ListItem>
          ))}
        </UnorderedList>
      </Section>
      {selectedReceipt && (
        <ReceiptDetails>
          <Heading1>Detalhes da Receita</Heading1>
          <p><strong>Paciente:</strong> {selectedReceipt.patientName}</p>
          <p><strong>Data:</strong> {selectedReceipt.date}</p>
          <p><strong>Medicamentos:</strong></p>
          <ul>
            {selectedReceipt.medicines.map((medicine, index) => (
              <li key={index}>{medicine.name} - {medicine.dose}</li>
            ))}
          </ul>
        </ReceiptDetails>
      )}
    </Container>
  );
};

export default ReceiptsList;