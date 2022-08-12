import { useCartState } from '../../context/CartContext';

const CheckoutComplete = props => {
  const cart = useCartState();

  return (
    <div className="h-screen w-screen">
      <div></div>
    </div>
  );
};

export default CheckoutComplete;
