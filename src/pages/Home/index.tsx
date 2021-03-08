import { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";

import { Carousel, HomeContainer } from "./styles";


const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/assets/fifa-18.png`,
    `${process.env.PUBLIC_URL}/assets/mortal-kombat-xl.png`,
    `${process.env.PUBLIC_URL}/assets/horizon-zero-dawn.png`,
    `${process.env.PUBLIC_URL}/assets/terra-media-sombras-de-mordor.png`,
    `${process.env.PUBLIC_URL}/assets/the-witcher-iii-wild-hunt.png`,
  ];

  return (
    <HomeContainer>
      <Header/>

      <main>
        <section>
          <h2>Confira os jogos em destaque</h2>
          <Carousel>
            <Button onClick={() => {
              if(index > 0) {
                setIndex(index - 1);
              }
              else {
                setIndex(2);
              }
            }}>
              <FcPrevious/>
            </Button>
            {
              <img src={images[index]} alt="Game em destaque" />
            }
            <Button onClick={() => {
              if(index < 2) {
                setIndex(index + 1);
              }
              else {
                setIndex(0);
              }
            }}>
              <FcNext/>
            </Button>
          </Carousel>
          <Link to="/Games">
            Clique aqui para ver todo nosso catálogo agora mesmo!
          </Link>
        </section>
      </main>
      <Footer/>
    </HomeContainer>
  );
};

export default Home;
