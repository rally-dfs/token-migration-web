import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import SolanaTransferCard from '../components/solana_transfer_card';
import { config } from '../config';
import { getBalance, swapWrappedCanonical } from '../services';
import { Provider, web3 } from '@project-serum/anchor';
import { Wallet } from '../types/wallet';
const { PublicKey, Connection, clusterApiUrl } = web3;

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TransferV2ToV3Page = () => {
  // set wallet, connection, provider
  const wallet = useWallet();
  const connection = new Connection(
    clusterApiUrl(config.network as web3.Cluster as web3.Cluster),
    'confirmed',
  );
  const provider = new Provider(connection, wallet as Wallet, {});

  //pub keys required for v2 <> v3 swap

  const rlyV2Pk = new PublicKey(config.tokens.rlyV2Mint);
  const rlyV2data = new PublicKey(config.tokens.rlyV2Data);
  const rlyV3Pk = new PublicKey(config.tokens.rlyV3Mint);
  const rlyV3data = new PublicKey(config.tokens.rlyV3Data);

  const [balance, setBalance] = useState<number>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchRlyv2Balance = async () => {
    try {
      //get rly v2 balance
      const bal = await getBalance(wallet, connection, rlyV2Pk);
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(0);
    }
  };

  const transferRlyV2 = async () => {
    // swap v2 <> v3
    await swapWrappedCanonical(
      provider,
      rlyV3Pk,
      rlyV3data,
      rlyV2Pk,
      rlyV2data,
    );
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
