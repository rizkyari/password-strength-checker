import {useState} from 'react';
import PasswordValidation from '../types/passwordValidation';

const usePasswordValidation = (): PasswordValidation  => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validatePasswordComposition = (value: string) : 'Strong' | 'Good' | 'Poor' => {
        const containsAlphanumeric = /[0-9a-zA-Z]/.test(value);
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsDigit = /[0-9]/.test(value);
        const containsSymbol = /[^A-Za-z0-9]/.test(value);
        const isLengthGood = value.length >= 8;

        if (
            containsAlphanumeric &&
            containsUppercase &&
            containsLowercase &&
            containsDigit &&
            containsSymbol &&
            isLengthGood
          ) {
            return 'Strong';
          } else if (
            (containsAlphanumeric || containsLowercase || containsUppercase || containsSymbol) &&
            isLengthGood && containsDigit
          ) {
            return 'Good';
          } else {
            return 'Poor';
          }
    };

    const validatePasswordMatch = (passwordValue: string, confirmPasswordValue: string) : 'Match' | 'Not Match' => {
        return passwordValue === confirmPasswordValue ? 'Match' : 'Not Match';
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
    }

    const passwordStrength = validatePasswordComposition(password);
    const passwordMatch = validatePasswordMatch(password, confirmPassword);

    return {password, confirmPassword, handleChangePassword, handleChangeConfirmPassword, passwordStrength, passwordMatch}
};

export default usePasswordValidation;