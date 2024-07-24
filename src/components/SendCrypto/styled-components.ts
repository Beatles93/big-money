import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #ff6f61;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #8bc34a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;