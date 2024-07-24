import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const SelectNetworkContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  margin-right: 20px; /* Сдвиг вправо от левого края */
`;

export const SelectedNetwork = styled.div`
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #ffcc00;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
`;

export const NetworkList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ffcc00;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 1000;
  width: 100%;
  color: #000000;
`;

export const NetworkItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffcc;
  }
`;

export const NetworkLogo = styled.img`
  width: 60px;
  height: 20px;
  margin-right: 10px;
`;


