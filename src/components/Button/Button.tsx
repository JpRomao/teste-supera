import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ type, children, ...rest }) => {
  return (
    <StyledButton {...rest} type={type}>
      { children }
    </StyledButton>
  );
}

export default Button;
