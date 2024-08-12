import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import SendCrypto from "./components/SendCrypto/SendCrypto";
// import YourFunds from "./components/YourFunds/YourFunds";
import "./App.module.scss";
import { supportedNetworks, defaultNetwork  } from "./constants/supported-networks";

const clientId = "bd67f547709165d07a9971dbe1b41f25";

function App() {
  const setQuery = (query: string) => {
    console.log("Setting query:", query);
  };

  return (
    <ThirdwebProvider activeChain={defaultNetwork} supportedChains={supportedNetworks} clientId={clientId}>
      <BrowserRouter>
        <Header setQuery={setQuery} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <SendCrypto />
          {/* <YourFunds /> */}
        </div>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;
