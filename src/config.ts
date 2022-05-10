import { PublicKey } from '@solana/web3.js';
import { web3 } from '@project-serum/anchor';

export const config = {
  tokens: {
    rlyV3Mint: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
    rlyV3Data: '97exq8nMj13ydaQAwxMN26nfHXtvoVioexYkoB1ZUs2v',
    rlyV2Mint: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
    rlyV2Data: '61SVmuBgYEChu3vBR4PXtTzHbXYsn78CM7uZCSquieHu',
    rlyWormholeMint: '6Y7LNYkHiJHSH8zR2HvZQzXD3QA9yFw64tyMHxBxDRe4',
    rlyWormholeData: 'FvdfyPydxRgCnFPwBdrx7B1fuBAZFxWCahATumYvzEdv',
  },
  network: (process.env.REACT_APP_SOLANA_CLUSTER || 'devnet') as web3.Cluster,
};

export const RlyV2MintPublicKey = new PublicKey(config.tokens.rlyV2Mint);
export const RlyV2DataPublicKey = new PublicKey(config.tokens.rlyV2Data);
export const RlyV3MintPublicKey = new PublicKey(config.tokens.rlyV3Mint);
export const RlyV3DataPublickey = new PublicKey(config.tokens.rlyV3Data);
export const RlyWormholePublicKey = new PublicKey(
  config.tokens.rlyWormholeMint,
);
export const RlyWormholeDataPublicKey = new PublicKey(
  config.tokens.rlyWormholeData,
);
