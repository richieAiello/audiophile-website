import DetailsProductPrice from './DetailsProductPrice';
import { useState } from 'react';
import {
  useCartState,
  useCartDispatch,
} from '../../context/contexts';
import amountInCart from '../../helpers/amountInCart';

const DetailsProductAdd = ({ product }) => {
  // const [incrementDisabled, setIncrementDisabled] = useState(false);
  // const [decrementDisabled, setDecrementDisabled] = useState(true);
  // const [addCartDisabled, setAddCartDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const cart = useCartState();
  const dispatch = useCartDispatch();

  const handleIncrementClick = e => {
    const cartAmount = amountInCart(cart, product);
    console.log(cartAmount);

    cartAmount + quantity < 10 && setQuantity(prev => prev + 1);
  };

  const handleDecrementClick = e => {
    quantity > 1 && setQuantity(prev => prev - 1);
  };

  // Creates a new array or products based on the quantity state.
  // Adds array to cart with a dispatch function.
  // If quantity was greater then one, reset quantity to 1.
  const handleAddCartClick = e => {
    const cartAmount = amountInCart(cart, product);

    const products = [...Array(quantity)].map(() => {
      return {
        slug: product?.slug,
        name: product?.name,
        price: product?.price,
      };
    });

    amountInCart.length + products.length > 10 &&
      console.log('10 items max');

    quantity > 1 && setQuantity(1);
    console.log(products);
  };

  return (
    <div>
      <DetailsProductPrice
        price={(product?.price * quantity).toLocaleString()}
      />
      <div className="grid gap-y-4 w-max sm:grid-flow-col sm:gap-x-4">
        <div className="flex items-center justify-between px-4 h-12 w-[7.5rem] bg-grey">
          <button
            type="button"
            aria-label="Subtract item from total."
            onClick={handleDecrementClick}
            // disabled={props.decrementDisabled}
            className="btn text-black hover:text-orange focus:text-orange"
          >
            -
          </button>
          <span className="btn">{quantity}</span>
          <button
            type="button"
            aria-label="Add item to total."
            onClick={handleIncrementClick}
            // disabled={props.incrementDisabled}
            className="btn text-black hover:text-orange focus:text-orange"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddCartClick}
          // disabled={props.addCartDisabled}
          className="btn py-[0.9375rem] pl-[2.125rem] pr-[1.9375rem] bg-orange text-white
        hover:bg-light-orange focus:bg-light-orange hover:text-hero-black focus:text-hero-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsProductAdd;
