import { Web3Provider } from "@/providers/Web3Provider";
import React from "react";

export const metadata = {
  title: "Web3 Wallet Connect",
  description: "RainbowKit + Wagmi + MetaMask",
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body>
        {/* 
          Wrap the entire app in <Web3Provider> to provide:
          - wagmi configuration (Ethereum client, chains, connectors)
          - RainbowKit context for wallet UI
          - QueryClient for caching and state management
          
          This ensures any component in the app can use wagmi/RainbowKit hooks
          like useAccount, useConnect, useBalance, etc.
        */}
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
