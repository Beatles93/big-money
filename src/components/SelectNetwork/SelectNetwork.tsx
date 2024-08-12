import React, { useState } from "react";
import {
  SelectNetworkContainer,
  SelectedNetwork,
  NetworkLogo,
  NetworkList,
  NetworkItem,
} from "./styled-components";
import {
  defaultNetwork,
  supportedNetworks,
} from "../../constants/supported-networks";
// import { useSwitchActiveWalletChain } from "thirdweb/react";
import { useSwitchChain, useActiveChain } from "@thirdweb-dev/react";
import { Chain } from "@thirdweb-dev/chains";

const SelectNetwork = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const switchChain = useSwitchChain();
  const activeChain = useActiveChain();
  const selectedNetwork = activeChain || defaultNetwork;
  const handleNetworkChange = async (network: Chain) => {
    setDropdownOpen(false);
    await switchChain(network.chainId);
  };
  const resolveIpfsUrl = (url?: string) => {
    if (!url) return null;
    if (url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    return url;
  };

  return (
    <SelectNetworkContainer>
      <SelectedNetwork onClick={() => setDropdownOpen(!dropdownOpen)}>
        <NetworkLogo
          src={resolveIpfsUrl(selectedNetwork.icon?.url)}
          alt={selectedNetwork.name}
        />
        {selectedNetwork.name}
      </SelectedNetwork>
      {dropdownOpen && (
        <NetworkList>
          {supportedNetworks.map((network) => (
            <NetworkItem
              key={network.chainId}
              onClick={() => handleNetworkChange(network)}
            >
              <NetworkLogo
                src={resolveIpfsUrl(network.icon.url)}
                alt={network.name}
              />
              {network.name}
            </NetworkItem>
          ))}
        </NetworkList>
      )}
    </SelectNetworkContainer>
  );
};

export default SelectNetwork;
