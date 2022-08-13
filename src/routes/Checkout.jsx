import BackBtn from '../components/shared-components/BackBtn';
import CheckoutForm from '../components/checkout/CheckoutForm';
import '../styles/form.css';

const Checkout = props => {
  return (
    <main className="container mt-[6.625rem] md:mt-[7.625rem] lg:mt-40">
      <BackBtn />
      <CheckoutForm />
    </main>
  );
};

export default Checkout;
