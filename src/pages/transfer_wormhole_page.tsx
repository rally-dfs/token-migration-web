import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';

const TransferWormholePage = () => {
  const wallet = useWallet();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchWormholeBalance = async (): Promise<Number> => {
    // Put Some Real Web3 Interaction Code Here
    return new Promise((r) =>
      setTimeout(() => {
        r(100000);
      }, 2000),
    );
  };

  const transferWormhole = async () => {
    //Do Some Real Web3 to Perform the transfer
  };

  return (
    <div>
      <SolanaTransferCard
        tokenHumanName="Wormhole"
        fetchBalance={fetchWormholeBalance}
        performTransfer={transferWormhole}
      />
    </div>
  );
};

export default TransferWormholePage;
