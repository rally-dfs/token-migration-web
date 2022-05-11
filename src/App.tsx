import SolanaContext from './components/solana_context';
import './App.css';
import Header from './components/header';
import TransferHomePage from './pages/transfer_home_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransferV2ToV3Page from './pages/transfer_v2_to_v3_page';
import TransferWormholePage from './pages/transfer_wormhole_page';
import ButtonStyle from './styles/button.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ marginBottom: 12 }}>
          <h1>Swap for new sRLY</h1>
          <div style={{ fontSize: 14, marginTop: 8 }}>
            <a
              className={ButtonStyle.rly_link_button}
              target="_blank"
              rel="noreferrer"
              href="https://solscan.io/account/sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh">
              sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh
            </a>
          </div>
        </div>
        <SolanaContext>
          <Routes>
            <Route path="transfer-v2-to-v3" element={<TransferV2ToV3Page />} />
            <Route
              path="transfer-wormhole"
              element={<TransferWormholePage />}
            />
            <Route path="/" element={<TransferHomePage />} />
          </Routes>
        </SolanaContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
