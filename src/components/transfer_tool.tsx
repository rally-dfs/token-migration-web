import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import Card from './card';
import ConnectWalletPrompt from './connect_wallet_prompt';
import ButtonStyles from '../styles/button.module.css';

const TransferTool = () => {
  const wallet = useWallet();

  if (!wallet.connected) {
    return <ConnectWalletPrompt />;
  }

  return (
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
          className={
            ButtonStyles.rly_button + ' ' + ButtonStyles.flexed_buttons
          }
          onClick={() => {
            console.log('Need to do actual web3 stuff here');
          }}>
          Swap RLY V2
        </button>
        <button
          className={
            ButtonStyles.rly_button + ' ' + ButtonStyles.flexed_buttons
          }
          onClick={() => {
            console.log('Need to do actual web3 stuff here');
          }}>
          Swap Wormhole
        </button>
      </div>
    </Card>
  );
};

export default TransferTool;
