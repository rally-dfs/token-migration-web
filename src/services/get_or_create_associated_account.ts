import { web3, Provider } from '@project-serum/anchor';
import {
  getAssociatedTokenAddress,
  getAccount,
  createAssociatedTokenAccountInstruction,
} from 'spl-token-v2';
const { Transaction } = web3;

export const getOrCreateAssociatedAccount = async (
  provider: Provider,
  mint: web3.PublicKey,
  owner: web3.PublicKey,
) => {
  const { connection } = provider;
  const associatedAddress = await getAssociatedTokenAddress(mint, owner);

  try {
    return await getAccount(connection, associatedAddress);
  } catch (e) {
    return createAccount(provider, mint, owner, associatedAddress);
  }
};

const createAccount = async (
  provider: Provider,
  mint: web3.PublicKey,
  owner: web3.PublicKey,
  associatedAddress: web3.PublicKey,
) => {
  const { connection } = provider;

  const createAccountIx = await createAssociatedTokenAccountInstruction(
    owner,
    associatedAddress,
    owner,
    mint,
  );

  //create transaction
  const tx = new Transaction().add(createAccountIx);

  //send transaction
  const sig = await provider.send(tx);

  //confirm transaction
  await connection.confirmTransaction(sig, 'finalized');

  //return new account info
  return await getAccount(connection, associatedAddress);
};
