import { useCartState } from '../context/CartContext';
import BackBtn from '../components/shared-components/BackBtn';
import CheckoutForm from '../components/checkout/CheckoutForm';
import '../styles/form.css';

const Checkout = props => {
  const cart = useCartState();

  return (
    <main className="container mt-[6.625rem]">
      <BackBtn />
      {cart.length === 0 ? (
        <p>
          Please add items to your cart before visiting this page.
        </p>
      ) : (
        <CheckoutForm />
      )}
    </main>
  );
};

export default Checkout;
