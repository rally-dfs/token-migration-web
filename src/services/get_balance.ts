import { web3 } from '@project-serum/anchor';
import { WalletContextState } from '@solana/wallet-adapter-react';

import { getAssociatedTokenAddress, getMint, getAccount } from 'spl-token-v2';

export const getBalance = async (
  wallet: WalletContextState,
  connection: web3.Connection,
  tokenMintPk: web3.PublicKey,
) => {
  //get mint info
  const mint = await getMint(connection, tokenMintPk);

  if (!wallet.publicKey) {
    return 0;
  }

  // get the associated token address for the current wallet
  const tokenAccountAddress = await getAssociatedTokenAddress(
    tokenMintPk,
    wallet.publicKey,
  );

  // get the account info for the associated token address
  const tokenAccount = await getAccount(
    connection,
    tokenAccountAddress,
    'finalized',
  );

  console.log(tokenAccount.address.toBase58());

  //check that the token account is initialized
  if (!tokenAccount.isInitialized) {
    return 0;
  }

  // get raw amount from token account
  const { amount } = tokenAccount;
  // get token decimals from mint
  const { decimals } = mint;

  //convert to base units
  const bal = Number(amount) / Number(10 ** decimals);

  console.log('balance', bal);

  return bal;
};
