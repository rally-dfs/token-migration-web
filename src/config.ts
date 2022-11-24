import { PublicKey } from '@solana/web3.js';
import { web3 } from '@project-serum/anchor';

export const NETWORK = (process.env.REACT_APP_SOLANA_CLUSTER ||
  'devnet') as web3.Cluster;
export const RlyV2MintPublicKey = new PublicKey(
  process.env.REACT_APP_RLY_V2_MINT ||
    'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
);
export const RlyV2DataPublicKey = new PublicKey(
  process.env.REACT_APP_RLY_V2_DATA ||
    '6XmbFZmcgJRnvxEHGbzc1ZAmYrpmiE9BS8nrz41ohSwn',
);
export const RlyV3MintPublicKey = new PublicKey(
  process.env.REACT_APP_RLY_V3_MINT ||
    'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
);
export const RlyV3DataPublickey = new PublicKey(
  process.env.REACT_APP_RLY_V3_DATA ||
    '5vK2GSkAsDRVx9L6H5X6K7MB1pKNtR9u6iCgtY3DxEAZ',
);
export const RlyWormholePublicKey = new PublicKey(
  process.env.REACT_APP_WORMHOLE_RLY_MINT ||
    '5vK2GSkAsDRVx9L6H5X6K7MB1pKNtR9u6iCgtY3DxEAZ',
);
export const RlyWormholeDataPublicKey = new PublicKey(
  process.env.REACT_APP_WORMHOLE_RLY_DATA ||
    '5vK2GSkAsDRVx9L6H5X6K7MB1pKNtR9u6iCgtY3DxEAZ',
);

export const rpcURL =
  process.env.REACT_APP_RPC_URL || 'https://api.mainnet-beta.solana.com';
