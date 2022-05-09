import { PublicKey, Connection } from '@solana/web3.js';
import {
  getAssociatedTokenAddress,
  getMint,
  getAccount,
} from '@solana/spl-token';
import { WalletContextState } from '@solana/wallet-adapter-react';

const getBalance = async (
  wallet: WalletContextState,
  connection: Connection,
  tokenMintPk: PublicKey,
) => {
  //get mint info
  const mint = await getMint(connection, tokenMintPk);

  if (!wallet.publicKey) {
    return BigInt(0);
  }

  // get the associated token address for the current wallet
  const tokenAccountAddress = await getAssociatedTokenAddress(
    tokenMintPk,
    wallet.publicKey,
  );

  // get the account info for the associated token address
  const tokenAccount = await getAccount(connection, tokenAccountAddress);

  //check that the token account is initialized
  if (!tokenAccount.isInitialized) {
    return BigInt(0);
  }

  // get raw amount from token account
  const { amount } = tokenAccount;
  // get token decimals from mint
  const { decimals } = mint;

  //convert to base units
  const bal = BigInt(amount) / BigInt(10 ** decimals);

  return bal;
};

export default getBalance;
