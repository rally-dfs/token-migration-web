import { web3 } from '@project-serum/anchor';

/**
 * Wallet interface for objects that can be used to sign provider transactions.
 * https://github.com/project-serum/anchor/blob/3ceba021e1eb95453f69370e6d8065c6883aecfa/ts/src/provider.ts#L266
 */

export interface Wallet {
  publicKey: web3.PublicKey;
  signTransaction(tx: web3.Transaction): Promise<web3.Transaction>;
  signAllTransactions(txs: web3.Transaction[]): Promise<web3.Transaction[]>;
}
