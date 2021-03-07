import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} />
      </div>
    );
}

export default Input;
