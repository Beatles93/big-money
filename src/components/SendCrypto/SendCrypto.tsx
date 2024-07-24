import { useState } from "react";
import { useAddress, useMetamask, useNetwork } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ModalOverlay, ModalContent, Input, Select, Button } from "./styled-components";

const SendCrypto = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const [network, switchNetwork] = useNetwork();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("ETH");
  const [balance, setBalance] = useState("--");

  const handleSend = async () => {
    if (!recipient || !amount) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });
      await tx.wait();
      alert("Transaction successful!");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Send Crypto in One Click!</h2>
        <Input
          type="text"
          placeholder="Address you want to send a crypto 0xef1..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <Input
          type="text"
          placeholder="How much? ... 3 ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select value={token} onChange={(e) => setToken(e.target.value)}>
          <option value="ETH">ETH</option>
          {/* Add more tokens as needed */}
        </Select>
        <p>Balance: {balance}</p>
        <Button onClick={handleSend}>Send</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SendCrypto;