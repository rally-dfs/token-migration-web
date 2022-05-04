import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import ButtonStyles from '../styles/button.module.css';

const ConnectWalletPrompt = () => {
  const walletModalContext = useWalletModal();

  return (
    <div>
      <h3>To Get Started Connect a Wallet containing RLY V2 Tokens</h3>
      <button
        className={ButtonStyles.rly_button}
        onClick={() => {
          walletModalContext.setVisible(true);
        }}>
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWalletPrompt;
