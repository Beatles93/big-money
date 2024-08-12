// import React from "react";
// import {
//   FundsWrapper,
//   TokenWrapper,
//   TokenIcon,
//   TokenInfo,
//   TokenName,
//   TokenBalance,
// } from "./styled-components";
// // import useWalletTokens from "../UseWalletTokens/useWalletTokens";

// interface TokenData {
//   name: string;
//   balance: string | undefined;
//   icon: string;
// }

// const YourFunds: React.FC = () => {
//   const address = "0xEB33beF9B867F83a79EA64FA4668bc6Fe2E77C88";
//   // const { tokens, isLoading, isError } = useWalletTokens(address);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading token balances</div>;
//   }

//   const balances: TokenData[] = tokens.map((token) => ({
//     name: token.name,
//     balance: token.balance,
//     icon: "/public/images/ethereum.png", 
//   }));

//   return (
//     <FundsWrapper>
//       <h2>Your Funds</h2>
//       {balances.map((token, index) => (
//         <TokenWrapper key={index}>
//           <TokenIcon src={token.icon} alt={token.name} />
//           <TokenInfo>
//             <TokenName>{token.name}</TokenName>
//             <TokenBalance>Balance: {token.balance}</TokenBalance>
//           </TokenInfo>
//         </TokenWrapper>
//       ))}
//     </FundsWrapper>
//   );
// };

// export default YourFunds;

// import React from "react";
//   // import {
//   //   useAddress,
//   //   useBalance,
//   //   // ChainId,
//   //   // useToken,
//   //   useContract,
//   //   useWallet,
//   //   useBalanceForAddress,
//   // } from "@thirdweb-dev/react";
// import {
//   FundsWrapper,
//   TokenWrapper,
//   TokenIcon,
//   TokenInfo,
//   TokenName,
//   TokenBalance,
// } from "./styled-components";
// import Moralis from "moralis";
// import { EvmChain } from "@moralisweb3/common-evm-utils";

// interface TokenData {
//   name: string;
//   balance: string | undefined;
//   icon: string;
// }
// const runApp = async () => {
//   await Moralis.start({
//     apiKey:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjFhMTVmYmI1LTY5ZWItNGQ5My1hMzBhLTkxYzdkMzJiNWJiZSIsIm9yZ0lkIjoiNDAxOTk5IiwidXNlcklkIjoiNDEzMDgzIiwidHlwZUlkIjoiMWUxZWU4ZTktOTdiYS00ZmRiLWJjZTEtMmI4OTI3NDU0NzNkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjIzNDIxMTcsImV4cCI6NDg3ODEwMjExN30.yqZJ8TXMu0A52t6iemlfDieJXtdzm3C8_MUHYdofgQc",
//     // ...and any other configuration
//   });

//   // const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

//   const chain = EvmChain.ETHEREUM;

//   const response = await Moralis.EvmApi.token.getWalletTokenBalances({
//     address,
//     chain,
//   });

//   console.log(response.toJSON());
// };

// runApp();

// const YourFunds: React.FC = () => {
//   // const address = useAddress();
//   // const wallet = useWallet();
//   // const balance = useBalanceForAddress(
//   //   "0xeb33bef9b867f83a79ea64fa4668bc6fe2e77c88"
//   // );
//   // console.log(balance);
//   // const ethBalance = useBalance('0xeb33bef9b867f83a79ea64fa4668bc6fe2e77c88');
//   // console.log(ethBalance);
//   // const usdcContract = useContract(
//   //   "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//   //   "token"
//   // );
//   // const usdcBalance = useBalance(address && usdcContract.contract);

//   const balances: TokenData[] = [
//     // {
//     //   name: "Ethereum",
//     //   balance: ethBalance.data?.displayValue,
//     //   icon: "/public/images/ethereum.png",
//     // },
//     // {
//     //   naeme: "USD Coin",
//     //   balance: usdcBalanc.data?.displayValue,
//     //   icon: "path/to/usdc-icon.png",
//     // },
//     // {
//     //   name: "Chroma",
//     //   balance: chrBalance.data?.displayValue,
//     //   icon: "path/to/chr-icon.png",
//     // },
//   ];

//   return (
//     <FundsWrapper>
//       <h2>Your Funds</h2>
//       {balances.map((token, index) => (
//         <TokenWrapper key={index}>
//           <TokenIcon src={token.icon} alt={token.name} />
//           <TokenInfo>
//             <TokenName>{token.name}</TokenName>
//             <TokenBalance>Balance: {token.balance}</TokenBalance>
//           </TokenInfo>
//         </TokenWrapper>
//       ))}
//     </FundsWrapper>
//   );
// };

// export default YourFunds;
