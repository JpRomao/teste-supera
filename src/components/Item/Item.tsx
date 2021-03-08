import transformToBRL from "../../services/transformToBRL";
import Strong from "../Strong";
import { ButtonContainer, ImageContainer, ItemInformation, ProductCard } from "./styles";

interface ItemProps {
  name: string;
  image: string;
  score: number;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, image, score, price, children }) => (
  <ProductCard>
    <ImageContainer>
      <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={`Foto produto ${name}`}/>
    </ImageContainer>
    <ItemInformation>
      <span>{name}</span>
      <span>
        Preço:
        <Strong
          label={`${transformToBRL(price)}`}
        />
      </span>
      <span>
        Score:
        <Strong
          label={`${score}`}
        />
      </span>
    </ItemInformation>
    <ButtonContainer>
      {children}
    </ButtonContainer>
  </ProductCard>
);

export default Item;
