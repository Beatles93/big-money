import { useState } from "react";
// import { useAddress, useSigner } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import {
  ModalWrapper,
  Input,
  Select,
  Button,
  Balance,
} from "./styled-components"; // Импортируем стили

const SendCrypto = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("ETH");
  // const address = useAddress();
  // const { data: signer } = useSigner();

  const handleSend = async () => {
    if (signer && recipient && amount) {
      try {
        const transaction = await signer.sendTransaction({
          to: recipient,
          value: ethers.utils.parseEther(amount), // Конвертируем сумму в wei
        });
        await transaction.wait();
        setRecipient("");
        setAmount("");
      } catch (error) {
        console.error("Failed to send transaction", error);
      }
    }
  };

  return (
    <ModalWrapper>
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
        <option value="DAI">DAI</option>
      </Select>
      <Balance>Balance: --</Balance>
      <Button onClick={handleSend}>Send</Button>
    </ModalWrapper>
  );
};

export default SendCrypto;
