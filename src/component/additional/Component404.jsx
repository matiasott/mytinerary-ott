import LayoutMain from '../../pages/Layout/LayoutMain';
import Image from 'react-bootstrap/Image';
import "./component404";

const Componente404 = () => {

  return (
    <LayoutMain>
      <div className='error404'>
      <Image clasName="image404" src="https://www.cinco8.com/wp-content/uploads/2020/08/404.png" />
      </div>
    </LayoutMain>
  );
};

export default Componente404;