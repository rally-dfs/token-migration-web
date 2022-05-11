import { web3, Provider, BN } from '@project-serum/anchor';
import { canonicalSwapProgram, swapWrappedForCanonical } from 'rly-js';
import { getMint } from 'spl-token-v2';
import { getOrCreateAssociatedAccount } from './get_or_create_associated_account';

export const swapWrappedCanonical = async (
  provider: Provider,
  canMint: web3.PublicKey,
  canData: web3.PublicKey,
  wrappedMint: web3.PublicKey,
  wrappedData: web3.PublicKey,
) => {
  const { connection, wallet } = provider;

  // get instance of can swap program
  const canSwap = await canonicalSwapProgram(provider);

  // get or create canonical associated account

  const { address: canTokenAccount } = await getOrCreateAssociatedAccount(
    provider,
    canMint,
    wallet.publicKey,
  );

  // get or create wrapped associated account return address and current balance

  const { address: wrappedtokenAccount, amount } =
    await getOrCreateAssociatedAccount(provider, wrappedMint, wallet.publicKey);

  // get decimals of destination token to calculate destination amount

  const { decimals: canDec } = await getMint(connection, canMint);
  const { decimals: wrappedDec } = await getMint(connection, wrappedMint);

  // convert wrapped balance to base wrapped units

  const wrappedAmount = Number(amount) / 10 ** wrappedDec;

  // convert wrapped balance to canonical decimal units to ensure proper destination amount

  const destAmount = new BN(wrappedAmount * 10 ** canDec);

  // execute swap
  return swapWrappedForCanonical({
    canSwap,
    canonicalMint: canMint,
    wrappedMint: wrappedMint,
    canonicalData: canData,
    wrappedData: wrappedData,
    sourceTokenAccount: wrappedtokenAccount,
    destinationTokenAccount: canTokenAccount,
    destinationAmount: destAmount,
    wallet,
    connection,
  });
};
