
interface StrongProps {
  label: string | number;
  name?: string;
}

const Strong: React.FC<StrongProps> = ({label, name}) => (
  <strong className={name}>{label}</strong>
)

export default Strong;
