import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import ButtonStyles from '../styles/button.module.css';
import Card from './card';

const ConnectWalletPrompt = () => {
  const walletModalContext = useWalletModal();

  return (
    <Card>
      <div>
        <h3>To Get Started Connect a Solana Wallet</h3>
        <button
          className={ButtonStyles.rly_button}
          onClick={() => {
            walletModalContext.setVisible(true);
          }}>
          Connect Wallet
        </button>
      </div>
    </Card>
  );
};

export default ConnectWalletPrompt;
