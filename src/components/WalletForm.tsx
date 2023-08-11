import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ExpenseType, RootState } from '../type';
import { Dispatch, fetchCurrencies, sendExpense } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  exchangeRates: '',
};

function WalletForm() {
  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const [formData, setFormData] = useState<ExpenseType>(INITIAL_STATE);
  const dispatch: Dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendExpense(formData));
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ formData.value }
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            value={ formData.currency }
            onChange={ handleSelect }
          >
            <option value="USD">USD</option>
            <option value="DOGE">DOGE</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
            <option value="ARS">ARS</option>
            <option value="BTC">BTC</option>
            <option value="LTC">LTC</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="ILS">ILS</option>
            <option value="ETH">ETH</option>
            <option value="XRP">XRP</option>
            <option value="AUD">AUD</option>
          </select>
        </label>
        <label>
          Método de pagamento
          <select
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleSelect }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label>
          Tag:
          <select
            data-testid="tag-input"
            name="tag"
            value={ formData.tag }
            onChange={ handleSelect }
          >
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
            <option>Alimentação</option>
          </select>
        </label>
        <label>
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
