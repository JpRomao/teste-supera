import { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import Button from "../../components/Button/Button";
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

  useEffect(() => {
    setTimeout(() => {
      if(index < 2) {
        setIndex(index + 1);
      }
      else {
        setIndex(0);
      }
    }, 10 * 1000);
  }, [index]);

  return (
    <HomeContainer>
      <Header/>
      <main>
        <h2></h2>
        <section>
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
        </section>
      </main>
    </HomeContainer>
  );
};

export default Home;
