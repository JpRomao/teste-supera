import { useEffect, useState } from 'react';

import Header from "../../components/Header/Header";
import Item from '../../components/Item/Item';
import Select from '../../components/Select';
import Strong from '../../components/Strong';

import api from '../../services/api';

import { HomeContainer, Main, ItemName } from './styles';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  score: number;
  price: number;
}

export default function Home() {
  const [products, setProduto] = useState<Array<ProductProps>>([{
    id: 0,
    name: '',
    image: '',
    score: 0,
    price: 0
  }]);

  async function loadList() {
    const response = await api.get('');

    return setProduto(response.data);
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <HomeContainer>
      <Header/>
      <Main>
        {/* <img src={`${process.env.PUBLIC_URL}/assets/arrow-down-icon.svg`}/> */}

        <section id="games">
          <ItemName>
            <Select
              label="Ordenar por:"
              name="order"
              options={[
                {
                  label: "Nome",
                  value: "name"
                },
                {
                  label: "Preço",
                  value: "price"
                },
                {
                  label: "Pontuação",
                  value: "score"
                }
              ]}
            />
            <Strong
              name="name"
              label="Nome"
            />
            <Strong
              name="price"
              label="Preço"
            />
            <Strong
              name="score"
              label="Pontuação"
            />
          </ItemName>
          {
            products.map(item => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  score={item.score}
                  price={item.price}
                />
              )
            })
          }
        </section>
      </Main>
    </HomeContainer>
  );
}
