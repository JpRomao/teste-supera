import { useEffect, useState } from 'react';

import Header from "../../components/Header/Header";
import Item from '../../components/Item/Item';
import Input from '../../components/Input/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import { HomeContainer, Main, OrderOptions, ProductsContainer } from './styles';
import compare from '../../services/compare';

interface ProductProps {
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

export default function Home() {
  const [products, setProducts] = useState<Array<ProductProps>>([{
    id: 0,
    name: '',
    image: '',
    score: 0,
    price: 0
  }]);
  const [sorter, setSorter] = useState('name');
  const [order, setOrder] = useState<number>(1);

  useEffect(() => {
    async function loadList() {
      const response = await api.get('');
      const newResponse: Array<NewProductProps> = [];

      response.data.map((game: any) => {
        game.sorter = sorter;
        game.order = order;
        return newResponse.push(game);
      });

      if(sorter === 'name') {
        setProducts(newResponse.sort(compare));
      }
      else if(sorter === 'score') {
        setProducts(newResponse.sort(compare));
      }
      else {
        setProducts(newResponse.sort(compare));
      }
    }

    loadList();
  }, [sorter, order]);

  return (
    <HomeContainer>
      <Header/>
      <Main>
        {/* <img src={`${process.env.PUBLIC_URL}/assets/arrow-down-icon.svg`}/> */}

        <section id="games">
          <OrderOptions>
            <div>
              <Select
                label="Ordenar por:"
                name="order"
                options={[
                  { label: "Nome", value: "name" },
                  { label: "Preço", value: "price" },
                  { label: "Pontuação", value: "score" }
                ]}
                onChange={e => {
                    console.log(order)

                    return setSorter(e.target.value);
                  }
                }
              />
            </div>
            <div>
              <Input
                label="Menor Para o maior "
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
                    return setOrder(Number(e.target.value))
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
                    buttonType="button"
                  />
                )
              })
            }
          </ProductsContainer>
        </section>
      </Main>
    </HomeContainer>
  );
}
