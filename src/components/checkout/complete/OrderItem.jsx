import { useState } from 'react';

const OrderItem = ({ item }) => {
  const [product, SetProduct] = useState(item);

  return (
    <div className="grid grid-flow-col grid-cols-[auto,1fr,auto] items-start font-bold uppercase mb-4">
      <img
        src={product.icon}
        alt=""
        className="rounded-lg w-[3.125rem] h-[3.125rem]"
      />
      <div className="sm:ml-4">
        <p className="max-w-[7ch] sm:max-w-none">{product.name}</p>
        <p className="opacity-50 text-[0.875rem]">{`$ ${product.price}`}</p>
      </div>
      <p className="opacity-50 lowercase">x{product.quantity}</p>
    </div>
  );
};

export default OrderItem;
