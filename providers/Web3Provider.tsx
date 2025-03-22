"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PROJECT_ID } from "@/constants/env";
import { ReactNode } from "react";

const config = getDefaultConfig({
  appName: "MetaMask Integration",
  projectId: PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum],
  ssr: true,
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: React.PropsWithChildren<{}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
