import { Link } from 'react-router-dom';
import { Head } from './styles';

const Header: React.FC =() => {
  return (
    <Head>
      <div>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo Supera games"/>
        </Link>
      </div>
      <h1>Sua loja de games</h1>
    </Head>
  );
}

export default Header;
