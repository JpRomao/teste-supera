import Button from "../Button/Button";
import Strong from "../Strong";
import { ButtonContainer, ImageContainer, ItemInformation, ProductCard } from "./styles";

interface ItemProps {
  name: string;
  image: string;
  score: number;
  price: number;
  buttonType?: 'submit' | 'button' | 'reset' | undefined;
}

const Item: React.FC<ItemProps> = ({ name, image, score, price, buttonType }) => (
  <ProductCard>
    <ImageContainer>
      <Button type={buttonType}>
        <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={`Foto produto ${name}`}/>
      </Button>
    </ImageContainer>
    <ItemInformation>
      <span>{name}</span>
      <span>
        Preço:
        <Strong
          label={` ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}`}
        />
      </span>
      <span>
        Score:
        <Strong
          label={` ${score}`}
        />
      </span>
    </ItemInformation>
    <ButtonContainer>
      <Button>
        <Strong
          label="Adicionar ao carrinho"
        />
      </Button>
    </ButtonContainer>
  </ProductCard>
);

export default Item;
