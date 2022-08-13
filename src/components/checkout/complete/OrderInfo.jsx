import { useState } from 'react';
import { useCartState } from '../../../context/CartContext';
import OrderItem from './OrderItem';

const OrderInfo = props => {
  const cart = useCartState();
  const [hidden, setHidden] = useState(true);
  const [moreItems, setMoreItems] = useState(
    () => cart.slice(1) ?? []
  );
  const [total, setTotal] = useState(() => {
    return (
      cart.reduce((total, current) => {
        return total + current.quantity * current.price;
      }, 0) + 50
    );
  });

  return (
    <div className="mb-6 md:mb-12 md:grid md:grid-cols-[246px,1fr]">
      <div className="bg-grey rounded-t-lg p-6 md:rounded-t-none md:rounded-l-lg">
        <div>
          <OrderItem item={cart[0]} />
          {!hidden && (
            <>
              {moreItems.map(item => {
                return <OrderItem key={item.slug} item={item} />;
              })}
            </>
          )}
          {moreItems.length > 0 && (
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
                {hidden
                  ? `View ${
                      moreItems.length > 1
                        ? `(${moreItems.length}) More Items`
                        : '(1) More Item'
                    }`
                  : 'View Less'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className="bg-black text-white uppercase pl-6 pt-[0.9375rem] h-[5.75rem] rounded-b-lg
        md:rounded-b-none md:h-full md:pt-0 md:flex md:flex-col md:justify-center md:rounded-r-lg"
      >
        <p className="opacity-50 mb-2">grand total</p>
        <p className="font-bold text-[1.125rem]">{`$ ${total.toLocaleString()}`}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
