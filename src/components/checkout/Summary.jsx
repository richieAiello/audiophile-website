import { useCartState } from '../../context/CartContext';

const Summary = props => {
  const cart = useCartState();

  return (
    <>
      <h3>Summary</h3>
      <div></div>
    </>
  );
};

export default Summary;
