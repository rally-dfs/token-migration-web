import SolanaContext from './components/solana_context';
import './App.css';
import Header from './components/header';
import TransferTool from './components/transfer_tool';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1 style={{ marginBottom: 12 }}>Migrate From RLY v2 to RLY v3</h1>
        <SolanaContext>
          <Routes>
            <Route path="/" element={<TransferTool />} />
          </Routes>
        </SolanaContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
