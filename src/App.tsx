import Card from './components/card';
import ConnectWalletPrompt from './components/connect_wallet_prompt';
import SolanaContext from './components/solana_context';

// Hack to use require because of CSS conflicts in solana provided UI library
// TODO: see if we can fix this using require or import in the CSS directly
require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  return (
    <div className="App">
      <SolanaContext>
        <header>
          <div className="d-flex ai-center">
            <img
              src={require('./images/rly-logo.png')}
              alt="small rly network logo"
            />
            <div
              className="text-white"
              style={{
                fontWeight: 600,
                textTransform: 'uppercase',
                marginLeft: 12,
              }}>
              RLY Network
            </div>
          </div>
        </header>
        <h1>Migrate From RLY v2 to RLY v3</h1>

        <Card style={{ marginTop: 12 }}>
          <ConnectWalletPrompt />
        </Card>
      </SolanaContext>
    </div>
  );
}

export default App;
