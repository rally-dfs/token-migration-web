import { Navigate } from 'react-router-dom';
import SolanaTransferCard from '../components/solana_transfer_card';

const TransferV2ToV3Page = () => {
  // const wallet = useWallet();
  const wallet = { connected: true, fake: 'wallet' };

  if (!wallet.connected) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <SolanaTransferCard
        wallet={wallet}
        tokenHumanName={'RLY V2'}
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

export default TransferV2ToV3Page;
