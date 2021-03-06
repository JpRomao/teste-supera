interface SelectProps {
  name: string;
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select id={name} {...rest}>
      { options.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
    </select>
  </div>
);

export default Select;
