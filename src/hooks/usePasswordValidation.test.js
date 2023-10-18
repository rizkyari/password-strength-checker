import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import usePasswordValidation from './usePasswordValidation';

describe('usePasswordValidation', () => {
  it('should validate a strong password', () => {
    const { getByText, getByTestId } = render(
      <TestComponent usePasswordValidation={usePasswordValidation} />
    );
    const passwordInput = getByTestId('password-input');

    fireEvent.change(passwordInput, { target: { value: 'StrongP@ss123' } });

    expect(getByText('Strong')).toBeInTheDocument();
  });

  it('should validate a good password', () => {
    const { getByText, getByTestId } = render(
      <TestComponent usePasswordValidation={usePasswordValidation} />
    );
    const passwordInput = getByTestId('password-input');

    fireEvent.change(passwordInput, { target: { value: 'GoodPass1' } });

    expect(getByText('Good')).toBeInTheDocument();
  });

  it('should validate a poor password', () => {
    const { getByText, getByTestId } = render(
      <TestComponent usePasswordValidation={usePasswordValidation} />
    );
    const passwordInput = getByTestId('password-input');

    fireEvent.change(passwordInput, { target: { value: 'poor' } });

    expect(getByText('Poor')).toBeInTheDocument();
  });
});

function TestComponent({ usePasswordValidation }) {
  const {
    password,
    handleChangePassword,
    passwordStrength,
  } = usePasswordValidation();

  return (
    <div>
      <input
        type="password"
        data-testid="password-input"
        value={password}
        onChange={handleChangePassword}
      />
      {passwordStrength && <div>{passwordStrength}</div>}
    </div>
  );
}
