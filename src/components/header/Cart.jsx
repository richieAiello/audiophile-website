import CheckoutBtn from './CheckoutBtn';

const Cart = props => {
  return (
    <div
      className={`
        container absolute z-10 top-[7.125rem] left-0 right-0 mx-auto rounded-lg max-h-[calc(100vh-8.625rem)] overflow-y-scroll bg-white
        py-8 px-7
        ${props.className}
      `}
    >
      {/* Disable Checkout out button when cart is empty */}
      <CheckoutBtn />
    </div>
  );
};

export default Cart;
