import { Link } from 'react-router-dom';

const CheckoutBtn = ({ onClick }) => {
  return (
    <Link
      to="/checkout"
      className="btn text-center bg-orange text-white py-[0.9375rem] col-span-2
      hover:bg-light-orange hover:text-hero-black
      focus:bg-light-orange focus:text-hero-black"
      onClick={onClick}
    >
      Checkout
    </Link>
  );
};

export default CheckoutBtn;
