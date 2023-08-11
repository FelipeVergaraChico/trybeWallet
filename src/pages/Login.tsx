import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dispatch, fetchCurrencies, enviarEmail } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  isEmailValid: false,
  isPassWordValid: false,
};

function Login() {
  const [data, setData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();

  const isEmailValid = (email: string) => email.includes('@') && email.includes('.com');
  const isPasswordValid = (password: string) => password.length >= 6;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      email: value,
      isEmailValid: isEmailValid(value),
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      password: value,
      isPassWordValid: isPasswordValid(value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(enviarEmail(data.email, data.password));
    dispatch(fetchCurrencies());
    navigate('/carteira');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="email-input"
        onChange={ handleEmailChange }
        value={ data.email }
      />
      <input
        type="password"
        name="password"
        id="password"
        data-testid="password-input"
        onChange={ handlePasswordChange }
        value={ data.password }
      />
      <button type="submit" disabled={ !(data.isEmailValid && data.isPassWordValid) }>
        Entrar
      </button>
    </form>
  );
}

export default Login;
