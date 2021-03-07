import { SelectHTMLAttributes } from "react";
import { SelectBlock } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

export default function Select({ name, label, options, ...rest }: SelectProps) {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        { options.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
      </select>
    </SelectBlock>
  );
}
