import { useEffect, useState } from "react";
import { GiCancel } from 'react-icons/gi';
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import Input from "../../components/Input/Input";
import Select from "../../components/Select";
import compare from "../../services/compare";
import Strong from "../../components/Strong";
import Button from "../../components/Button/Button";
import CartItem from "../../components/Cart/CartItem";
import transformArrayToParams from "../../services/transformArrayToParams";

import { CartContainer, GamesContainer, Main, OrderOptions, ProductsContainer, ProductsOnCart } from "./styles";

import api from "../../services/api";
import Footer from "../../components/Footer";
import transformToBRL from "../../services/transformToBRL";

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  score: number;
  price: number;
};

export interface NewProductProps {
  id: number;
  sorter: string;
  order: Boolean;
  name: string;
  image: string;
  score: number;
  price: number;
};

export interface ProductsOnCartProps {
  id?: number;
  name: string;
  image: string;
  price: number;
}

const Games: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [sorter, setSorter] = useState("name");
  const [order, setOrder] = useState<number>(1);
  const [itemsOnCart, setItemsOnCart] = useState<ProductsOnCartProps[]>([]);
  const [itemsOnCartIds, setItemsOnCartIds] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [frete, setFrete] = useState(0);

  useEffect(() => {
    async function loadList() {
      const response = await api.get<ProductProps[]>("");
      const newResponse: Array<NewProductProps> = [];

      response.data.map((game: any) => {
        game.sorter = sorter;
        game.order = order;
        return newResponse.push(game);
      });

      setProducts(newResponse.sort(compare));
    }

    loadList();
  }, [sorter, order]);

  function handleViewCart() {
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');

    if(cart && cartItems) {
      if(cartItems.style.display === 'none'){
        return cartItems.style.display = 'flex';
      }
      return cartItems.style.display = 'none';
    }
  }

  return (
    <GamesContainer>
      <Header/>
      <Main>
        <aside>
          <CartContainer>
            <Button id="cart" type="button" onClick={handleViewCart}>
              <img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`} alt="Botão de visualizar carrinho"/>
            </Button>
          </CartContainer>
          <ProductsOnCart style={{ display: 'none' }} id="cart-items">
            <div>
              {
                itemsOnCart.map((product) =>
                  <CartItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  >
                    <Button
                      type="button"
                      onClick={() => {
                          if(frete > 0){
                            setFrete(frete - 10);
                          }
                          setPrice(price - product.price);
                          setItemsOnCart(() => itemsOnCart.filter(item => item.name !== product.name));
                          return setItemsOnCartIds(() => itemsOnCartIds.filter(item => item !== product.name));
                        }
                      }
                    >
                      <GiCancel/>
                    </Button>
                  </CartItem>
                )
              }
            </div>
            <div>
              {
                (price - frete) < 250
                  ?
                itemsOnCartIds.length >= 1 && <Link to={`/checkout/${transformArrayToParams(itemsOnCartIds)},${frete},${price}`}>Checkout</Link>
                  :
                itemsOnCartIds.length >= 1 && <Link to={`/checkout/${transformArrayToParams(itemsOnCartIds)},0,${price}`}>Checkout</Link>
              }
              {
                (price - frete) < 250
                  ?
                `Preço total: ${transformToBRL(price + frete)}`
                  :
                `Preço total: ${transformToBRL(price)}`
              }
            </div>
          </ProductsOnCart>
        </aside>
        <section id="games">
          <OrderOptions>
            <article>
              <Select
                label="Ordenar por:"
                name="order"
                options={[
                  { label: "Nome", value: "name" },
                  { label: "Preço", value: "price" },
                  { label: "Pontuação", value: "score" }
                ]}
                onChange={e => {
                    return setSorter(e.target.value);
                  }
                }
              />
            </article>
            <div className="order-option">
              <Input
                label="Menor para o maior "
                name="order"
                type="radio"
                checked={order === 1}
                value={1}
                onChange={(e) => {
                    return setOrder(Number(e.target.value))
                  }
                }
              />
              <Input
                label="Maior para o menor "
                name="order"
                type="radio"
                checked={order === 0}
                value={0}
                onChange={(e) => {
                    return setOrder(Number(e.target.value));
                  }
                }
              />
            </div>
          </OrderOptions>
          <ProductsContainer>
            {
              products.map(item => {
                return (
                  <Item
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    score={item.score}
                    price={item.price}
                  >
                    <Button
                      type="submit"
                      onClick={() => {
                          if(!itemsOnCart.includes(item)) {
                            setPrice(price + item.price);
                            if((price - frete) < 250) {
                              setFrete(frete + 10);
                            }
                            else {
                              setFrete(0);
                            }
                            setItemsOnCartIds([...itemsOnCartIds, item.name]);
                            return setItemsOnCart([...itemsOnCart, item]);
                          }
                          return 'Você já adicionou esse Game ao seu carrinho!';
                        }
                      }
                    >
                      <Strong
                        label="Adicionar ao carrinho"
                      />
                    </Button>
                  </Item>
                )
              })
            }
          </ProductsContainer>
        </section>
      </Main>
      <Footer/>
    </GamesContainer>
  );
}

export default Games;
