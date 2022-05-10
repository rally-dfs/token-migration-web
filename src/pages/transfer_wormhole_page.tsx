import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';
import { Provider, web3 } from '@project-serum/anchor';
import SolanaTransferCard from '../components/solana_transfer_card';
import {
  config,
  RlyV3DataPublickey,
  RlyV3MintPublicKey,
  RlyWormholeDataPublicKey,
  RlyWormholePublicKey,
} from '../config';
import { Wallet } from '../types/wallet';
import { getBalance } from '../services/get_balance';
import { swapWrappedCanonical } from '../services/swap_wrapped_canonical';
const { Connection, clusterApiUrl } = web3;

const TransferWormholePage = () => {
  // set wallet, connection, provider

  const wallet = useWallet();
  const connection = new Connection(
    clusterApiUrl(config.network as web3.Cluster),
    'confirmed',
  );

  const provider = new Provider(connection, wallet as Wallet, {});

  const [balance, setBalance] = useState<number>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchWormholeBalance = async () => {
    try {
      //get rly v2 balance
      const bal = await getBalance(wallet, connection, RlyWormholePublicKey);
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(0);
    }
  };

  const transferWormhole = async () => {
    // swap wormhole <> v3
    await swapWrappedCanonical(
      provider,
      RlyV3MintPublicKey,
      RlyV3DataPublickey,
      RlyWormholePublicKey,
      RlyWormholeDataPublicKey,
    );
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
