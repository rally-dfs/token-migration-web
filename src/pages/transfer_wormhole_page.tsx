import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';

const TransferWormholePage = () => {
  const wallet = useWallet();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <SolanaTransferCard
        tokenHumanName="Wormhole"
        wallet={wallet}
        fetchBalance={async () => {
          return new Promise((r) =>
            setTimeout(() => {
              r(100000);
            }, 2000),
          );
        }}
      />
    </div>
  );
};

export default TransferWormholePage;
