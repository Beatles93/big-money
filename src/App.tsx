import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import SendCrypto from "./components/SendCrypto/SendCrypto";
import "./App.module.scss";

const clientId = "bd67f547709165d07a9971dbe1b41f25";

function App() {
  const setQuery = (query) => {
    console.log("Setting query:", query);
  };

  return (
    <ThirdwebProvider clientId={clientId}>
      <BrowserRouter>
        <Header setQuery={setQuery} />
        <SendCrypto />
        {/* <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes> */}
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;
