import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';
import {
  RlyV2DataPublicKey,
  RlyV2MintPublicKey,
  RlyV3DataPublickey,
  RlyV3MintPublicKey,
} from '../config';
import { getBalance } from '../services/get_balance';
import { swapWrappedCanonical } from '../services/swap_wrapped_canonical';
import { useAnchorProvider } from '../services/use_anchor_provider';

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TransferV2ToV3Page = () => {
  const [wallet, provider] = useAnchorProvider();

  const [balance, setBalance] = useState<number>();
  const [tx, setTx] = useState<string>();

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchRlyv2Balance = async () => {
    try {
      //get rly v2 balance
      const bal = await getBalance(
        wallet,
        provider.connection,
        RlyV2MintPublicKey,
      );
      setBalance(bal);
    } catch (error) {
      // if error set balance to zero
      setBalance(0);
    }
  };

  const transferRlyV2 = async () => {
    // swap v2 <> v3
    const tx = await swapWrappedCanonical(
      provider,
      RlyV3MintPublicKey,
      RlyV3DataPublickey,
      RlyV2MintPublicKey,
      RlyV2DataPublicKey,
    );
    setTx(tx);
  };

  return (
    <div>
      <SolanaTransferCard
        tokenHumanName={'Legacy sRLY'}
        tokenBalance={balance}
        txHash={tx}
        fetchBalance={fetchRlyv2Balance}
        performTransfer={transferRlyV2}
      />
    </div>
  );
};

export default TransferV2ToV3Page;
