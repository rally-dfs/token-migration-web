import Card from './components/card';
import ConnectWalletPrompt from './components/connect_wallet_prompt';
import SolanaContext from './components/solana_context';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <SolanaContext>
        <h1>Migrate From RLY v2 to RLY v3</h1>

        <Card style={{ marginTop: 12 }}>
          <ConnectWalletPrompt />
        </Card>
      </SolanaContext>
    </div>
  );
}

export default App;
