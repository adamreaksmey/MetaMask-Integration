"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PROJECT_ID } from "@/constants/env";

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
      {/* React Query handles caching, loading, and async state */}
      <QueryClientProvider client={queryClient}>
        {/* RainbowKit wraps the app to provide wallet UI & modals */}
        <RainbowKitProvider modalSize="compact" coolMode>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
