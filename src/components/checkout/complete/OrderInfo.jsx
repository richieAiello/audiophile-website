import { useState } from 'react';
import { useCartState } from '../../../context/CartContext';
import OrderItem from './OrderItem';

const OrderInfo = props => {
  const cart = useCartState();
  const [hidden, setHidden] = useState(true);

  const remainingItems = cart.slice(1);

  const total =
    cart.reduce((total, current) => {
      return total + current.quantity * current.price;
    }, 0) + 50;

  return (
    <div className="mb-6">
      <div className="bg-grey rounded-t-lg p-6">
        <div>
          <OrderItem item={cart[0]} />
          {!hidden && (
            <>
              {remainingItems.map(item => {
                return <OrderItem key={item.slug} item={item} />;
              })}
            </>
          )}
          {cart.length > 1 && (
            <div
              className="flex flex-col before:h-[1px] before:w-full 
              before:bg-[rgba(0,0,0,.08)] before:mb-3"
            >
              <button
                type="button"
                onClick={() => setHidden(!hidden)}
                className="btn self-center hover:text-orange focus:text-orange"
                tabIndex="1"
              >
                {hidden ? 'View More' : 'View Less'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black text-white uppercase pl-6 pt-[0.9375rem] h-[5.75rem] rounded-b-lg">
        <p className="opacity-50 mb-2">grand total</p>
        <p className="font-bold text-[1.125rem]">{`$ ${total.toLocaleString()}`}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
