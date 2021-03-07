import { Head } from './styles';

const Header: React.FC =() => {
  return (
    <Head>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo Supera games"/>
      </div>
      <h1>Sua loja de games</h1>
    </Head>
  );
}

export default Header;
