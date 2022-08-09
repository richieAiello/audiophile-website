import { useCartDispatch } from '../../../context/CartContext';

const EmptyCartBtn = props => {
  const dispatch = useCartDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch({ type: 'EMPTY' })}
      className="underline opacity-50 col-start-2 justify-self-end"
    >
      Empty Cart
    </button>
  );
};

export default EmptyCartBtn;
