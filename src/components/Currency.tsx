import { useContext, createContext, useState, useEffect } from "react";

interface CurrencyType {
  currency: string;
  setCurrency: Function;
  getCurrencySettings: Function;
  currencyOptions: {
    currencySymbol: string;
    treasuryMint: string;
    currencyDecimals: number;
    priceDecimals: number;
    volumeDecimals: number;
  }[];
}

const CurrencyContext = createContext<CurrencyType>({
  currency: "MHCNFT",
  setCurrency: () => {},
  getCurrencySettings: () => {},
  currencyOptions: [
    {
      currencySymbol: "MHCNF",
      treasuryMint: "5Kw6JUp9emPRHPnE1VWxvdGiHNpUkEJyuMCgy9Qo1fHQ",
      currencyDecimals: 3,
      priceDecimals: 3,
      volumeDecimals: 1,
    },
  ],
});

// create local storage key from creator wallet address
const CANDY_SHOP_CURRENCY_SYMBOL =
  "CandyShop" + process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!.slice(0, 8);

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencyProvider({
  currencyOptions,
  children,
}: {
  currencyOptions: CurrencyType["currencyOptions"];
  children: any;
}) {
  const [currency, setCurrency] = useState(() => {
    const localSymbol = localStorage.getItem(CANDY_SHOP_CURRENCY_SYMBOL);
    const currency = currencyOptions.find(
      (currency) => currency.currencySymbol === localSymbol
    );
    if (currency) return currency.currencySymbol;
    return currencyOptions[0].currencySymbol;
  });

  useEffect(() => {
    localStorage.setItem(CANDY_SHOP_CURRENCY_SYMBOL, currency);
  }, [currency]);

  const getCurrencySettings = () => {
    return currencyOptions.find((option) => currency === option.currencySymbol);
  };

  const value = {
    currency,
    setCurrency,
    getCurrencySettings,
    currencyOptions,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}
