import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: #000000;
  padding: 20px 90px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  margin-top: 20px;
  color: #ffffff;
`;

export const Input = styled.input`
  width: 94%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #ffcc00;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #ffcc00;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #ff0000;
  }
`;

export const Balance = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;
