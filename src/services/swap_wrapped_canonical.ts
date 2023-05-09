import { web3, AnchorProvider, BN } from '@project-serum/anchor';
import { canonicalSwapProgram, swapWrappedForCanonicalTx } from 'rly-js';
import { getMint } from 'spl-token-v2';
import { getOrCreateAssociatedAccount } from './get_or_create_associated_account';

export const swapWrappedCanonical = async (
  provider: AnchorProvider,
  canMint: web3.PublicKey,
  canData: web3.PublicKey,
  wrappedMint: web3.PublicKey,
  wrappedData: web3.PublicKey,
) => {
  const { connection, wallet } = provider;

  // get instance of can swap program
  const canSwap = await canonicalSwapProgram(provider);

  // get or create canonical associated account

  const canTokenAccount = await getOrCreateAssociatedAccount(
    provider,
    canMint,
    wallet.publicKey,
  );

  if (!canTokenAccount?.address) {
    return;
  }

  // get or create wrapped associated account return address and current balance

  const wrappedtokenAccount = await getOrCreateAssociatedAccount(
    provider,
    wrappedMint,
    wallet.publicKey,
  );

  if (!wrappedtokenAccount?.address || !wrappedtokenAccount?.amount) {
    return;
  }

  // get decimals of destination token to calculate destination amount

  const { decimals: canDec } = await getMint(connection, canMint);
  const { decimals: wrappedDec } = await getMint(connection, wrappedMint);

  // convert wrapped balance to base wrapped units

  const wrappedAmount = Number(wrappedtokenAccount.amount) / 10 ** wrappedDec;

  // convert wrapped balance to canonical decimal units to ensure proper destination amount

  const destAmount = new BN(wrappedAmount * 10 ** canDec);

  // execute swap

  const tx = await swapWrappedForCanonicalTx({
    canSwap,
    canonicalMint: canMint,
    wrappedMint: wrappedMint,
    canonicalData: canData,
    wrappedData: wrappedData,
    sourceTokenAccount: wrappedtokenAccount.address,
    destinationTokenAccount: canTokenAccount.address,
    destinationAmount: destAmount,
    walletPubKey: wallet.publicKey,
    connection,
  });

  return await provider.sendAndConfirm(tx);
};
