// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEit: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'REQUEST_SUCCESSful':
      return {
        ...state,
        currencies: action.payload,
      };
    case 'REQUEST_SUCCESS2':
      return {
        ...state, expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default wallet;
