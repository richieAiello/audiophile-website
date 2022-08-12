import { useCartState } from '../../../context/CartContext';
import Calculations from './Calculations';
import ItemWrapper from './ItemWrapper';
import PayBtn from './PayBtn';

const Summary = props => {
  const cart = useCartState();

  return (
    <>
      <h3>Summary</h3>
      <ItemWrapper cart={cart} />
      <Calculations cart={cart} />
      <PayBtn />
    </>
  );
};

export default Summary;
