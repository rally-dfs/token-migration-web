import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';
import { Provider, web3 } from '@project-serum/anchor';
import SolanaTransferCard from '../components/solana_transfer_card';
import { config } from '../config';
import { getBalance, swapWrappedCanonical } from '../services';
import { Wallet } from '../types/wallet';
const { PublicKey, Connection, clusterApiUrl } = web3;

const TransferWormholePage = () => {
  // set wallet, connection, provider

  const wallet = useWallet();
  const connection = new Connection(
    clusterApiUrl(config.network as web3.Cluster),
    'confirmed',
  );

  const provider = new Provider(connection, wallet as Wallet, {});

  //pub keys required for wormhole <> v3 swap
  const rlyV3Pk = new PublicKey(config.tokens.rlyV3Mint);
  const rlyV3data = new PublicKey(config.tokens.rlyV3Data);
  const rlyWormholePk = new PublicKey(config.tokens.rlyWormholeMint);
  const rlyWormholeData = new PublicKey(config.tokens.rlyWormholeData);

  const [balance, setBalance] = useState<number>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchWormholeBalance = async () => {
    try {
      //get rly v2 balance
      const bal = await getBalance(wallet, connection, rlyWormholePk);
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
      rlyV3Pk,
      rlyV3data,
      rlyWormholePk,
      rlyWormholeData,
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
