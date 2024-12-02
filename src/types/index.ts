export type currencyCount = { [key in number]: number }
export type withdrawLeast = { notes: currencyCount, bigCoins: currencyCount, smallCoins: currencyCount }