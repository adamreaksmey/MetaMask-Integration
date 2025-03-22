'use client';

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Connect Wallet</h1>
      <ConnectButton />
    </main>
  );
}
