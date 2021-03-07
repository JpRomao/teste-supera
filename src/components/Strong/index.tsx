import { StyledStrong } from "./styles";

interface StrongProps {
  label: string | number;
  name?: string;
}

const Strong: React.FC<StrongProps> = ({label, name}) => (
  <StyledStrong className={name}>
    {label}
  </StyledStrong>
)

export default Strong;
