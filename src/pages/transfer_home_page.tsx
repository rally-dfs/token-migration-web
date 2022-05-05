import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import Card from '../components/card';
import ConnectWalletPrompt from '../components/connect_wallet_prompt';
import ButtonStyles from '../styles/button.module.css';
import Faqs from '../components/faqs';
import { useNavigate } from 'react-router-dom';

const TransferHomePage = () => {
  const navigate = useNavigate();
  const wallet = useWallet();

  if (!wallet.connected) {
    return <ConnectWalletPrompt />;
  }

  return (
    <div>
      <Card>
        <h3>Wallet Connected</h3>
        <div
          className="d-flex"
          style={{
            marginTop: 18,
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
          <button
            className={ButtonStyles.rly_button}
            onClick={() => {
              navigate('/transfer-v2-to-v3');
            }}>
            Swap RLY V2
          </button>
          <button
            className={ButtonStyles.rly_button}
            onClick={() => {
              navigate('/transfer-wormhole');
            }}>
            Swap Wormhole
          </button>
        </div>
      </Card>

      <Faqs />
    </div>
  );
};

export default TransferHomePage;
