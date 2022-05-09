import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';
import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js';
import { config } from '../config';
import getBalance from '../services/getBalance';

const TransferWormholePage = () => {
  const wallet = useWallet();
  // get connection
  // @TODO remove hardcoded cluster value

  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
  const [balance, setBalance] = useState<BigInt>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchWormholeBalance = async () => {
    // Put Some Real Web3 Interaction Code Here
    //get rly v2 public key
    const rlyV2Pk = new PublicKey(config.tokens.rlyWormholeMint);

    try {
      //get rly v2 balance
      const bal = await getBalance(wallet, connection, rlyV2Pk);
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(BigInt(0));
    }
  };

  const transferWormhole = async () => {
    //Do Some Real Web3 to Perform the transfer
  };

  return (
    <div>
      <SolanaTransferCard
        tokenHumanName="Wormhole"
        tokenBalance={balance}
        fetchBalance={fetchWormholeBalance}
        performTransfer={transferWormhole}
      />
    </div>
  );
};

export default TransferWormholePage;
