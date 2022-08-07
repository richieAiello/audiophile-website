import DetailsProductPrice from './DetailsProductPrice';
import { useState, useEffect } from 'react';
import {
  useCartState,
  useCartDispatch,
} from '../../context/contexts';

const DetailsProductAdd = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useCartState();
  const dispatch = useCartDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleIncrementClick = e => {
    quantity < 10 && setQuantity(prev => prev + 1);
  };

  const handleDecrementClick = e => {
    quantity > 1 && setQuantity(prev => prev - 1);
  };

  const handleAddCartClick = e => {
    const currentProduct = {
      slug: product?.slug,
      name: product?.name,
      price: product?.price,
      quantity: quantity,
    };

    const getProductData = () => {
      const matchedProduct = cart.find(
        item => item.slug === currentProduct.slug
      );

      if (matchedProduct) {
        const newCart = cart.filter(
          item => item.slug !== matchedProduct.slug
        );
        currentProduct.quantity =
          currentProduct.quantity + matchedProduct.quantity;

        dispatch({
          type: 'REPLACE',
          replaceProduct: [...newCart, currentProduct],
        });
      } else {
        dispatch({
          type: 'ADD',
          addProduct: currentProduct,
        });
      }
    };

    getProductData();
    quantity > 1 && setQuantity(1);
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
