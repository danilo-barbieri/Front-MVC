import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Section,
  Heading1,
  Heading2,
  UnorderedList,
  ListItem,
  Strong,
  Input,
  TextArea,
  Select,
  Button,
} from './styles';

const CreateReceipt = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    birthdate: '',
    cpf: '',
    healthPlan: '',
  });

  const [doctorData, setDoctorData] = useState({
    name: '',
    crm: '',
    digitalSignature: '',
  });

  const [medications, setMedications] = useState([
    {
      name: '',
      dosage: '',
      quantity: '',
      administrationRoute: '',
      observations: '',
    },
  ]);

  const handlePatientDataChange = (event) => {
    const { name, value } = event.target;
    setPatientData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDoctorDataChange = (event) => {
    const { name, value } = event.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMedicationChange = (index, event) => {
    const { name, value } = event.target;
    setMedications((prevMedications) => {
      prevMedications[index][name] = value;
      return [...prevMedications];
    });
  };

  const addMedication = () => {
    setMedications((prevMedications) => [...prevMedications, {}]);
  };

  const removeMedication = (index) => {
    setMedications((prevMedications) => prevMedications.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Receita enviada para a farmácia!');
  };

  return (
    <Container>
      <Heading1>Criar Nova Receita</Heading1>
      <Section>
        <Heading2>Informações do Paciente</Heading2>
        <UnorderedList>
          <ListItem>
            <Strong>Nome:</Strong>
            <Input
              type="text"
              name="name"
              value={patientData.name}
              onChange={handlePatientDataChange}
            />
          </ListItem>
          <ListItem>
            <Strong>Data de Nascimento:</Strong>
            <Input
              type="date"
              name="birthdate"
              value={patientData.birthdate}
              onChange={handlePatientDataChange}
            />
          </ListItem>
          <ListItem>
            <Strong>CPF:</Strong>
            <Input
              type="text"
              name="cpf"
              value={patientData.cpf}
              onChange={handlePatientDataChange}
            />
          </ListItem>
          <ListItem>
            <Strong>Plano de Saúde:</Strong>
            <Select
              name="healthPlan"
              value={patientData.healthPlan}
              onChange={handlePatientDataChange}
            >
              <option value="">Selecione o Plano de Saúde</option>
              <option value="Unimed">Unimed</option>
              <option value="SulAmérica">SulAmérica</option>
              <option value="Hospitalar">Hospitalar</option>
              <option value="SUS">SUS</option>
              <option value="Cassi">Cassi</option>
            </Select>
          </ListItem>
        </UnorderedList>
      </Section>
      <Section>
        <Heading2>Informações do Médico</Heading2>
        <UnorderedList>
          <ListItem>
            <Strong>Nome:</Strong>
            <Input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleDoctorDataChange}
            />
          </ListItem>
          <ListItem>
            <Strong>CRM:</Strong>
            <Input
              type="text"
              name="crm"
              value={doctorData.crm}
              onChange={handleDoctorDataChange}
            />
          </ListItem>
          <ListItem>
            <Strong>Assinatura Digital:</Strong>
            <Input
              type="file"
              name="digitalSignature"
              onChange={handleDoctorDataChange}
            />
          </ListItem>
        </UnorderedList>
      </Section>
      <Section>
        <Heading2>Medicamentos</Heading2>
        {medications.map((medication, index) => (
          <UnorderedList key={index}>
            <ListItem>
              <Strong>Medicação:</Strong>
              <Input
                type="text"
                name="name"
                value={medication.name}
                onChange={(event) => handleMedicationChange(index, event)}
              />
            </ListItem>
            <ListItem>
              <Strong>Dosagem:</Strong>
              <Input
                type="text"
                name="dosage"
                value={medication.dosage}
                onChange={(event) => handleMedicationChange(index, event)}
              />
            </ListItem>
<ListItem>
              <Strong>Quantidade:</Strong>
              <Input
                type="number"
                name="quantity"
                value={medication.quantity}
                onChange={(event) => handleMedicationChange(index, event)}
              />
            </ListItem>
            <ListItem>
              <Strong>Via de Administração:</Strong>
              <Input
                type="text"
                name="administrationRoute"
                value={medication.administrationRoute}
                onChange={(event) => handleMedicationChange(index, event)}
              />
            </ListItem>
            <ListItem>
              <Strong>Observações:</Strong>
              <TextArea
                name="observations"
                value={medication.observations}
                onChange={(event) => handleMedicationChange(index, event)}
              />
            </ListItem>
            <ListItem>
              <Button type="button" onClick={() => removeMedication(index)}>
                Remover
              </Button>
            </ListItem>
          </UnorderedList>
        ))}
        <Button type="button" onClick={addMedication}>
          Adicionar Medicação
        </Button>
      </Section>
      <Button type="submit" onClick={handleSubmit}>
        Criar Receita
      </Button>
      <Link to={`/pharmacy`}>
        <Button>Verificar Receitas</Button>
      </Link>
    </Container>
  );
};

export default CreateReceipt;