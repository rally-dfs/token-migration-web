import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { rpcURL } from '../config';
import { Wallet } from '../types/wallet';
import { AnchorProvider } from '@project-serum/anchor';

export const useAnchorProvider = (): [WalletContextState, AnchorProvider] => {
  const wallet = useWallet();

  const connection = new Connection(rpcURL, 'confirmed');

  const provider = new AnchorProvider(connection, wallet as Wallet, {});

  return [wallet, provider];
};
