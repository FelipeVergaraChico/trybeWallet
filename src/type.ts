export type RootState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: string[],
    expenses: ExpenseType[],
    editor: boolean,
    idToEdit: number,
  }
};

export type ExpenseType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: any
};
