import React, { useState } from "react";
import {
  SelectNetworkContainer,
  SelectedNetwork,
  NetworkLogo,
  NetworkList,
  NetworkItem,
} from "./styled-components";

// Массив сетей для переключения
const networks = [
  { name: "Ethereum Mainnet", chainId: 1, logo: "/public/images/ethereum.png"},
  {
    name: "Binance Smart Chain Testnet",
    chainId: 97,
    logo: "/public/images/bnb.png",
  },
];

const SelectNetwork = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleNetworkChange = async (network: React.SetStateAction<{ name: string; chainId: number; logo: string; }>) => {
    setSelectedNetwork(network);
    setDropdownOpen(false);
    await switchNetwork(network.chainId);
  };

  return (
    <SelectNetworkContainer>
      <SelectedNetwork onClick={() => setDropdownOpen(!dropdownOpen)}>
        <NetworkLogo src={selectedNetwork.logo} alt={selectedNetwork.name} />
        {selectedNetwork.name}
      </SelectedNetwork>
      {dropdownOpen && (
        <NetworkList>
          {networks.map((network) => (
            <NetworkItem
              key={network.chainId}
              onClick={() => handleNetworkChange(network)}
            >
              <NetworkLogo src={network.logo} alt={network.name} />
              {network.name}
            </NetworkItem>
          ))}
        </NetworkList>
      )}
    </SelectNetworkContainer>
  );
};

export default SelectNetwork;
function switchNetwork(chainId: any) {
  throw new Error("Function not implemented.");
}

