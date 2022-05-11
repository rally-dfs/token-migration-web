import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { NETWORK } from '../config';
import { Wallet } from '../types/wallet';
import { Provider, web3 } from '@project-serum/anchor';

export const useAnchorProvider = (): [WalletContextState, Provider] => {
  const wallet = useWallet();

  const connection = new Connection(
    clusterApiUrl(NETWORK as web3.Cluster as web3.Cluster),
    'confirmed',
  );

  const provider = new Provider(connection, wallet as Wallet, {});

  return [wallet, provider];
};
