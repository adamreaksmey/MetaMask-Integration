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
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
