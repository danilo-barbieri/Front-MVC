import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 20px;
`;

export const Heading1 = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  :last-child {
    border-bottom: none;
  }
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #3e8e41;
  }
`;

export const ReceiptDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
`;