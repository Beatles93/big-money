import React from "react";
import { HeaderContainer, Logo, RightContainer } from "./styled-components";
import ButtonConnect from "../ButtonConnect/ButtonConnect";
import SelectNetwork from "../SelectNetwork/SelectNetwork";

interface HeaderProps {
  setQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo>Big money</Logo>
      <RightContainer>
        <SelectNetwork />
        <ButtonConnect />
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
