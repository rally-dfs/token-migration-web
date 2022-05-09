import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import SolanaTransferCard from '../components/solana_transfer_card';
import { config } from '../config';
import getBalance from '../services/getBalance';

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TransferV2ToV3Page = () => {
  const wallet = useWallet();

  // get connection
  // @TODO remove hardcoded cluster value

  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

  const [balance, setBalance] = useState<BigInt>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchRlyv2Balance = async () => {
    //get rly v2 public key
    const rlyV2Pk = new PublicKey(config.tokens.rlyV2Mint);

    try {
      //get rly v2 balance
      const bal = await getBalance(wallet, connection, rlyV2Pk);
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(BigInt(0));
    }
  };

  const transferRlyV2 = async () => {
    //Do Some Real Web3 to Perform the transfer
    await sleep(1000);

    throw new Error('Something went boom');
  };

  return (
    <div>
      <SolanaTransferCard
        tokenHumanName={'RLY V2'}
        tokenBalance={balance}
        fetchBalance={fetchRlyv2Balance}
        performTransfer={transferRlyV2}
      />
    </div>
  );
};

export default TransferV2ToV3Page;
