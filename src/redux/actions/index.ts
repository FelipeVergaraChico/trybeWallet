// Coloque aqui suas actions
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ExpenseType, RootState } from '../../type';

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;

export const enviarEmail = (email: string, password: string) => ({
  type: 'SAVE_EMAIL',
  payload: { email, password },
});

const requestStarted = () => ({
  type: 'REQUEST_STARTED',
});

export function requestSuccess(data: string[]) {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: data,
  };
}

export function fetchCurrencies() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const dataArray = Object.keys(data).filter((item) => item !== 'USDT');
      dispatch(requestSuccess(dataArray));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function requestSuccess2(exchangeRates: any, expense: ExpenseType) {
  return {
    type: 'REQUEST_SUCCESS2',
    payload: { ...expense, exchangeRates },
  };
}

export function sendExpense(expense: ExpenseType) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(requestSuccess2(data, expense));
    } catch (error: any) {
      console.log(error);
    }
  };
}
