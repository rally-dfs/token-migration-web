import SolanaContext from './components/solana_context';
import './App.css';
import Header from './components/header';
import Faqs from './components/faqs';
import TransferTool from './components/transfer_tool';

function App() {
  return (
    <div className="App">
      <Header />
      <SolanaContext>
        <h1 style={{ marginBottom: 12 }}>Migrate From RLY v2 to RLY v3</h1>

        <TransferTool />

        <Faqs />
      </SolanaContext>
    </div>
  );
}

export default App;
