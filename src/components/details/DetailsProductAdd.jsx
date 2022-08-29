import DetailsProductPrice from './DetailsProductPrice';
import { useState } from 'react';
import {
  useCartState,
  useCartDispatch,
} from '../../context/CartContext';
import QuantityBtn from '../shared-components/QuantityBtn';

const DetailsProductAdd = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useCartState();
  const dispatch = useCartDispatch();

  const productData = {
    slug: product?.slug,
    name: product?.cart.name,
    icon: product?.cart.icon,
    price: product?.price,
    quantity: quantity,
  };

  const currentProduct = cart.find(
    item => item.slug === productData.slug
  );

  const handleIncrementClick = e => {
    quantity < 100 && setQuantity(prev => prev + 1);
  };

  const handleDecrementClick = e => {
    quantity > 1 && setQuantity(prev => prev - 1);
  };

  const handleAddCartClick = e => {
    const addToCart = () => {
      if (currentProduct) {
        const newCart = cart.filter(
          item => item.slug !== currentProduct.slug
        );

        productData.quantity = quantity + currentProduct.quantity;

        dispatch({
          type: 'UPDATE',
          updateProduct: [...newCart, productData],
        });
      } else {
        dispatch({
          type: 'ADD',
          addProduct: productData,
        });
      }
    };

    addToCart();
    quantity > 1 && setQuantity(1);
  };

  return (
    <div>
      <DetailsProductPrice
        price={(product?.price * quantity).toLocaleString()}
      />
      <div className="grid gap-y-4 w-max sm:grid-flow-col sm:gap-x-4">
        <QuantityBtn
          quantity={quantity}
          onDecrementClick={handleDecrementClick}
          onIncrementClick={handleIncrementClick}
          className="w-[7.5rem] px-4"
        />
        <button
          type="button"
          onClick={handleAddCartClick}
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
