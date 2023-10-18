interface PasswordValidation {
    password : string;
    confirmPassword: string;
    handleChangePassword: ( e : React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeConfirmPassword: (e : React.ChangeEvent<HTMLInputElement>) => void;
    passwordStrength: 'Strong' | 'Good' | 'Poor';
    passwordMatch : 'Match' | 'Not Match'
}

export default PasswordValidation;