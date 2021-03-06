import Strong from "../Strong";
import { InformationContainer } from "./styles";

interface ItemProps {
  name: string;
  image: string;
  score: number;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, image, score, price }) => (
  <InformationContainer>
      <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={`Foto produto ${name}`}/>
      <span>{name}</span>
      <Strong
        label={price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}
      />
      <Strong
        label={score}
      />
  </InformationContainer>
);

export default Item;
