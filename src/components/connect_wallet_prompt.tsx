import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';

const ConnectWalletPrompt = () => {
  const network = WalletAdapterNetwork.Devnet;

  const solanaConnection = useMemo(() => clusterApiUrl(network), [network]);

  const supportedWallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={solanaConnection}>
      <WalletProvider wallets={supportedWallets} autoConnect>
        <WalletModalProvider>
          <div>
            <h3>To Get Started Connect a Wallet containing RLY V2 Tokens</h3>
            <button>Connect Wallet</button>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default ConnectWalletPrompt;
