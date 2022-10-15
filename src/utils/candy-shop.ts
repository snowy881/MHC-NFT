import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PublicKey } from "@solana/web3.js";
import { CandyShop } from "@liqnft/candy-shop-sdk";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as WalletAdapterNetwork;

const RPC_HOST = process.env.REACT_APP_SOLANA_RPC_HOST!;

const candyShop = new CandyShop({
  candyShopCreatorAddress: "33aXuSGCCVSkrRBwCfJkw6CwvDNMcSGHrTh18D7R3UpC",
  treasuryMint: "5Kw6JUp9emPRHPnE1VWxvdGiHNpUkEJyuMCgy9Qo1fHQ",
  candyShopProgramId: "csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS",
  env: "mainnet-beta",
  settings: {
    currencyDecimals: Number(
     3
    ),
    currencySymbol: "MHCNF",
    mainnetConnectionUrl: "https://ssc-dao.genesysgo.net/",
    connectionConfig: {
    httpHeaders: {
      '[NODE_SPECIFIC_HEADERS]': '[VALUE]'
    }
  }
  },
});

export {
  candyShop,
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
  RPC_HOST,
};
