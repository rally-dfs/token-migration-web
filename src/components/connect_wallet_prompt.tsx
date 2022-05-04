import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const ConnectWalletPrompt = () => {
  const walletModalContext = useWalletModal();

  return (
    <div>
      <h3>To Get Started Connect a Wallet containing RLY V2 Tokens</h3>
      <button
        onClick={() => {
          walletModalContext.setVisible(true);
        }}>
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWalletPrompt;
