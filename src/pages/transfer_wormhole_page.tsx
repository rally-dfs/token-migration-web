import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';
import {
  RlyV3DataPublickey,
  RlyV3MintPublicKey,
  RlyWormholeDataPublicKey,
  RlyWormholePublicKey,
} from '../config';
import { getBalance } from '../services/get_balance';
import { swapWrappedCanonical } from '../services/swap_wrapped_canonical';
import { useAnchorProvider } from '../services/use_anchor_provider';

const TransferWormholePage = () => {
  const [wallet, provider] = useAnchorProvider();

  const [balance, setBalance] = useState<number>();
  const [tx, setTx] = useState<string>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchWormholeBalance = async () => {
    try {
      //get rly v2 balance
      const bal = await getBalance(
        wallet,
        provider.connection,
        RlyWormholePublicKey,
      );
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(0);
    }
  };

  const transferWormhole = async () => {
    // swap wormhole <> v3
    const tx = swapWrappedCanonical(
      provider,
      RlyV3MintPublicKey,
      RlyV3DataPublickey,
      RlyWormholePublicKey,
      RlyWormholeDataPublicKey,
    );

    setTx(tx);
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
