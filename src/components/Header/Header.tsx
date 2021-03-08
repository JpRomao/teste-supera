import { Link } from 'react-router-dom';
import { Head } from './styles';

const Header: React.FC =() => {
  return (
    <Head>
      <header>
        <div>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo Supera games"/>
          </Link>
        </div>
        <h1>Get over the game. Head up a new World!</h1>
      </header>
    </Head>
  );
}

export default Header;
