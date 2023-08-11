import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ExpenseType, RootState } from '../type';

function Header() {
  const stateEmail = useSelector((state: RootState) => state.user.email);
  const stateTotal = useSelector((state: RootState) => state.wallet.expenses);
  const stateTotalBRL = stateTotal.map((item) => {
    return (
      parseFloat(item.value) * parseFloat(item.exchangeRates[item.currency].ask)
    );
  });

  const total = stateTotalBRL.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        { stateEmail }
      </p>
      <p data-testid="total-field">{ total.toFixed(2) }</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
