import SolanaContext from './components/solana_context';
import './App.css';
import Header from './components/header';
import TransferHomePage from './pages/transfer_home_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransferV2ToV3Page from './pages/transfer_v2_to_v3_page';
import TransferWormholePage from './pages/transfer_wormhole_page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1 style={{ marginBottom: 12 }}>Swap for new sRLY</h1>
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
