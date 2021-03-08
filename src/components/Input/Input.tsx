import React, { InputHTMLAttributes } from 'react';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
      <InputBlock>
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} />
      </InputBlock>
    );
}

export default Input;
