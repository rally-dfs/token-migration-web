import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import LoadingSpinner from '../components/loading_spinner';
import ButtonStyles from '../styles/button.module.css';

type SolanaTransferCardProps = {
  tokenHumanName: string;
  tokenBalance?: number;
  fetchBalance: () => Promise<void>;
  performTransfer: () => Promise<void>;
};

const SolanaTransferCard = ({
  fetchBalance,
  tokenHumanName,
  performTransfer,
  tokenBalance,
}: SolanaTransferCardProps) => {
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [performingSwap, setPerformingSwap] = useState(false);
  const [swapSuccessful, setSwapSuccessful] = useState(false);

  const performSwap = useCallback(async () => {
    setPerformingSwap(true);

    try {
      await performTransfer();
    } catch (err) {
      alert('Unable to Complete Swap, Please try again');
      setPerformingSwap(false);
      return;
    }

    setPerformingSwap(false);
    setSwapSuccessful(true);
  }, [performTransfer]);

  useEffect(() => {
    if (loadingBalance || tokenBalance) {
      return;
    }
    setLoadingBalance(true);
    fetchBalance();
    setLoadingBalance(false);
  }, [loadingBalance, tokenBalance, fetchBalance]);

  const _loadingContent = () => {
    return (
      <div>
        <div style={{ marginBottom: 8 }}>
          Determining your {tokenHumanName} Balance...
        </div>
        <LoadingSpinner />
      </div>
    );
  };

  const _performingSwapContent = () => {
    return (
      <div>
        <div style={{ marginBottom: 8 }}>Performing Swap on Solana</div>
        <LoadingSpinner />
      </div>
    );
  };

  const _swapCompleteContent = () => {
    return (
      <div>
        <div>Swap Successful!</div>
        <Link className={ButtonStyles.rly_link_button} to="/">
          Return to Homepage
        </Link>
      </div>
    );
  };

  const _renderRelevantView = () => {
    if (swapSuccessful) {
      return _swapCompleteContent();
    }
    if (loadingBalance) {
      return _loadingContent();
    }

    if (performingSwap) {
      return _performingSwapContent();
    }

    return (
      <div>
        <div>
          Balance: {tokenBalance?.toString()} {tokenHumanName}
        </div>

        <button
          className={ButtonStyles.rly_button}
          disabled={!tokenBalance}
          onClick={() => {
            performSwap();
          }}>
          Swap balance for sRLY
        </button>
      </div>
    );
  };

  return (
    <div>
      <Card>{_renderRelevantView()}</Card>
    </div>
  );
};

export default SolanaTransferCard;
