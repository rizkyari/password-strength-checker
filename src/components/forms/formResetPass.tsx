import {useState} from 'react';
import InputWithPass from '../ui/input/inputWithPass';
import GeneralButton from '../ui/button/generalButton';
import usePasswordValidation from '../../hooks/usePasswordValidation';
import './formResetPass.css';

function FormWithPass(){
    const [message, setMesage] = useState('');
    const {
        password,
        confirmPassword,
        handleChangePassword,
        handleChangeConfirmPassword,
        passwordStrength,
        passwordMatch,
    } = usePasswordValidation();

    const handleSubmit = () => {
        if(passwordMatch === 'Match'){
            alert('Your password is successfully changed');
            setMesage('');

            handleChangePassword({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            handleChangeConfirmPassword({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
        } else {
            setMesage('Password does not match. Please try again')
        }
    }

    const handleConfirmPasswordPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

    const isButtonDisabled = !password || !confirmPassword || password.length < 8;

    return (
        <div className='reset-container'>
            <h1>Reset Password</h1>
            <InputWithPass
                type="password"
                placeholder='Enter your new password'
                value={password}
                onChange={handleChangePassword}
                isPassword={true}
            />
            {password.length > 0 &&  <div className={` ${passwordStrength}`}>
                <div className={`password-strength`}>{passwordStrength}</div>
                </div>}
            {password.length > 0 && password.length < 8 && <p className='error-message'>Password must be at least 8 characters</p>}
            <div className='divider'/>
            <InputWithPass
                type="password"
                placeholder='Match your password'
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                onPaste={handleConfirmPasswordPaste}
                isPassword={true}
            />
            {message && <p className='error-message'>{message}</p>}
            <div className='divider'/>
            <GeneralButton text='Create Password' onClick={handleSubmit} disabled={isButtonDisabled}/>
        </div>
    );
}

export default FormWithPass;