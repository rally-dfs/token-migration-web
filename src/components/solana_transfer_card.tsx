import React from 'react';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { useCallback, useEffect, useState } from 'react';
import Card from '../components/card';
import LoadingSpinner from '../components/loading_spinner';
import ButtonStyles from '../styles/button.module.css';

type SolanaTransferCardProps = {
  wallet: WalletContextState | any;
  tokenHumanName: string;
  fetchBalance: (wallet: WalletContextState) => Promise<Number>;
};

const SolanaTransferCard = ({
  wallet,
  fetchBalance,
  tokenHumanName,
}: SolanaTransferCardProps) => {
  const [balance, setBalance] = useState<Number>();
  const [loadingBalance, setLoadingBalance] = useState(false);

  const getRemoteBalance = useCallback(async () => {
    setLoadingBalance(true);
    setBalance(await fetchBalance(wallet));
    setLoadingBalance(false);
  }, [wallet, setBalance, setLoadingBalance, fetchBalance]);

  useEffect(() => {
    if (loadingBalance || balance) {
      return;
    }

    getRemoteBalance();
  });

  return (
    <div>
      <Card>
        {loadingBalance && (
          <div>
            <div style={{ marginBottom: 8 }}>
              Determining your {tokenHumanName} Balance...
            </div>
            <LoadingSpinner />
          </div>
        )}

        {!loadingBalance && balance && (
          <div>
            <div>
              You have {balance} {tokenHumanName}
            </div>

            <button className={ButtonStyles.rly_button} onClick={() => {}}>
              Migrate All to RLY V3
            </button>
          </div>
        )}

        <div
          className="d-flex"
          style={{
            marginTop: 18,
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}></div>
      </Card>
    </div>
  );
};

export default SolanaTransferCard;
