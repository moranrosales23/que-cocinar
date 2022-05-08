import { Image } from 'native-base';
import logo from '_assets/images/logo.png';

const Logo = ({ height }) => (
  <Image source={logo} height={height} alt="Logo de la aplicación" resizeMode={'contain'} />
);

export default Logo;
