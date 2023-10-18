import React from 'react';
import ButtonProps from '../../../types/button';
import './generalButton.css';

const GeneralButton: React.FC<ButtonProps> = ({text, onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled} className='button-wrapper'>{text}</button>
    );
}

export default GeneralButton;