import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Card from '../components/card';
import LoadingSpinner from '../components/loading_spinner';
import ButtonStyles from '../styles/button.module.css';

type SolanaTransferCardProps = {
  tokenHumanName: string;
  fetchBalance: () => Promise<Number>;
  performTransfer: () => Promise<any>;
};

const SolanaTransferCard = ({
  fetchBalance,
  tokenHumanName,
}: SolanaTransferCardProps) => {
  const [balance, setBalance] = useState<Number>();
  const [loadingBalance, setLoadingBalance] = useState(false);

  const getRemoteBalance = useCallback(async () => {
    setLoadingBalance(true);
    setBalance(await fetchBalance());
    setLoadingBalance(false);
  }, [setBalance, setLoadingBalance, fetchBalance]);

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
