import { PublicKey } from '@solana/web3.js';
import { web3 } from '@project-serum/anchor';

interface Config {
  tokens: {
    rlyV3Mint: string;
    rlyV3Data: string;
    rlyV2Mint: string;
    rlyV2Data: string;
    rlyWormholeMint: string;
    rlyWormholeData: string;
  };
  network: web3.Cluster;
}

const devNetTokens = {
  rlyV3Mint: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
  rlyV3Data: '97exq8nMj13ydaQAwxMN26nfHXtvoVioexYkoB1ZUs2v',
  rlyV2Mint: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
  rlyV2Data: '61SVmuBgYEChu3vBR4PXtTzHbXYsn78CM7uZCSquieHu',
  rlyWormholeMint: '6Y7LNYkHiJHSH8zR2HvZQzXD3QA9yFw64tyMHxBxDRe4',
  rlyWormholeData: 'FvdfyPydxRgCnFPwBdrx7B1fuBAZFxWCahATumYvzEdv',
};

const mainNetTokens = {
  rlyV3Mint: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
  rlyV3Data: '97exq8nMj13ydaQAwxMN26nfHXtvoVioexYkoB1ZUs2v',
  rlyV2Mint: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
  rlyV2Data: '61SVmuBgYEChu3vBR4PXtTzHbXYsn78CM7uZCSquieHu',
  rlyWormholeMint: '6Y7LNYkHiJHSH8zR2HvZQzXD3QA9yFw64tyMHxBxDRe4',
  rlyWormholeData: 'FvdfyPydxRgCnFPwBdrx7B1fuBAZFxWCahATumYvzEdv',
};

const _buildConfigForEnvironment = (): Config => {
  const network = (process.env.REACT_APP_SOLANA_CLUSTER ||
    'devnet') as web3.Cluster;

  if (network !== 'mainnet-beta') {
    return {
      network,
      tokens: devNetTokens,
    };
  }

  return {
    network,
    tokens: mainNetTokens,
  };
};

export const config: Config = _buildConfigForEnvironment();

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
