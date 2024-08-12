import styled from "styled-components";

export const FundsWrapper = styled.div`
  background: #000000;
  padding: 20px 90px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  margin-top: 50px;
  color: #ffffff;
`;

export const TokenWrapper = styled.div`
  background: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #ffcc00;
`;

export const TokenIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const TokenInfo = styled.div`
  display: flex;
    flex-direction: column;
`;

export const TokenName = styled.span`
  font-weight: bold;
`;

export const TokenBalance = styled.span`
  color: #555;
`;
