import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TransferV2ToV3Page = () => {
  // const wallet = useWallet();
  const wallet = { connected: true, fake: 'wallet' };

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  const fetchRlyv2Balance = async (): Promise<Number> => {
    // Put Some Real Web3 Interaction Code Here
    await sleep(2000);

    return 10000;
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
        fetchBalance={fetchRlyv2Balance}
        performTransfer={transferRlyV2}
      />
    </div>
  );
};

export default TransferV2ToV3Page;
