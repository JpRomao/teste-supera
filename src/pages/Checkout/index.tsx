import { useEffect, useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom';


import Footer from "../../components/Footer";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { CheckoutContainer, ItemCell, Items, LinksContainer, TotalPrice } from "./styles";
import { ProductProps } from '../Games';

import api from "../../services/api";
import transformToBRL from "../../services/transformToBRL";
import Strong from "../../components/Strong";
interface CheckoutParams {
  items: string;
}

const Checkout: React.FC = () => {
  const { params } = useRouteMatch<CheckoutParams>();
  const [itemsToBuy, setItemsToBuy] = useState<ProductProps[]>([]);
  const items = params.items.split(',');
  const price = Number(items.pop());
  const frete = Number(items.pop());
  const totalPrice = transformToBRL(price + frete);

  useEffect(() => {
    async function loadCheckoutList() {
      const response = await api.get('');

      setItemsToBuy(response.data);
    }
    loadCheckoutList();
  }, []);


  return (
    <CheckoutContainer>
      <Header/>
      <main>
        <h2>Checkout</h2>
        <Items>
          <div>
            {
              itemsToBuy.map(item => {
                  if(items.includes(item.name)) {
                    return (
                      <ItemCell key={item.id}>
                        <div>{item.name}</div>
                        <div>{transformToBRL(item.price)}</div>
                      </ItemCell>
                    )
                  }
                  return '';
                }
              )
            }
            <ItemCell>
              <div>Frete</div>
              <div>{transformToBRL(frete)}</div>
            </ItemCell>
          </div>
        </Items>
        <TotalPrice>
            <span>Preço total:</span>
            <Strong
              label={totalPrice}
            />
        </TotalPrice>
        <LinksContainer>
          <Link to="/Games">
            Voltar para escolher os jogos
          </Link>
          <Button type='button'>
            Ir para página de pagamento
          </Button>
        </LinksContainer>
      </main>
      <Footer/>
    </CheckoutContainer>
  );
};

export default Checkout;
