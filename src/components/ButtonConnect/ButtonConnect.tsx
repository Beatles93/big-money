import {  ConnectWallet, ConnectWalletProps } from "@thirdweb-dev/react";

export default function ButtonConnect(props: ConnectWalletProps) {
  return <ConnectWallet {...props} theme={"light"} modalSize={"wide"} />;
}


