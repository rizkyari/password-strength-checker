import React,{useState} from 'react';
import InputProps from '../../../types/input';
import eyeSlash from '../../../assets/icons/eye-slash.png';
import eyeOpen from '../../../assets/icons/eye-open.png';
import './inputWithPass.css';

const InputWithPass: React.FC<InputProps> = ({
    type, placeholder, value, onChange, onPaste, isPassword
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
            setPasswordVisible(!passwordVisible);
        }
    return (
        <div className='input-container'>
            <input
                type={isPassword && passwordVisible ? 'text': type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onPaste={onPaste}
            />
            {isPassword && (
                <button className='password-toggle-button' onClick={togglePasswordVisibility}>
                    {passwordVisible ? (
                        <img className='icon-eyes' src={eyeSlash} alt='Hidden'/>
                    ) : (
                        <img className='icon-eyes' src={eyeOpen} alt='Show'/>
                    )}
                </button>
            )}
        </div>
    );
}

export default InputWithPass;